// Copies the language docs from the Fels repo into the site.
//
// The docs live next to the compiler (fels/docs/NN_name.md) so they change together with it.
// This turns each into a Starlight page: a front matter with the title and its place in the
// sidebar, links between docs rewritten to site links, and links into the compiler's source
// pointed at GitHub.
//
// FELS_DOCS names the docs folder; it defaults to ../gabbro/docs, the local checkout.

import { readdirSync, readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';

const from = resolve(process.env.FELS_DOCS ?? '../gabbro/docs');
const to = resolve('src/content/docs/docs');
const repo = 'https://github.com/fels-lang/fels/blob/main';

// NN_some_name.md → some-name
const slugOf = (file) => file.replace(/^\d+_/, '').replace(/\.md$/, '').replaceAll('_', '-');

rmSync(to, { recursive: true, force: true });
mkdirSync(to, { recursive: true });

const files = readdirSync(from).filter((f) => /^\d+_.*\.md$/.test(f)).sort();

// The first heading becomes the page title; a leading "11. " is dropped.
const headingOf = (text) => text.match(/^# (.+)\n/);
const titles = new Map(
	files.map((f) => {
		const h = headingOf(readFileSync(join(from, f), 'utf8').replace(/\r\n/g, '\n'));
		return [f, h ? h[1].replace(/^\d+\.\s*/, '') : slugOf(f)];
	}),
);

for (const file of files) {
	let text = readFileSync(join(from, file), 'utf8').replace(/\r\n/g, '\n');
	const heading = headingOf(text);
	const title = titles.get(file);
	if (heading) text = text.slice(heading[0].length).replace(/^\n+/, '');

	// [13_metaprogramming.md](...) shows the page's title instead of its file name
	text = text.replace(/\[`?(?:docs\/)?(\d+_[a-z0-9_]+\.md)`?\]\(/g, (all, f) => (titles.has(f) ? `[${titles.get(f).replace(/`/g, '')}](` : all));
	// 05_memory_zones.md#x → /docs/memory-zones/#x
	text = text.replace(/\]\((\d+_[a-z0-9_]+\.md)(#[^)]*)?\)/g, (_, f, anchor) => `](/docs/${slugOf(f)}/${anchor ?? ''})`);
	// ../src/sema.zig → the file on GitHub
	text = text.replace(/\]\(\.\.\/([^)]+)\)/g, (_, path) => `](${repo}/${path})`);

	const order = Number(file.match(/^(\d+)/)[1]);
	const front = `---\ntitle: ${JSON.stringify(title.replace(/`/g, ''))}\nsidebar:\n  order: ${order}\neditUrl: ${repo.replace("/blob/", "/edit/")}/docs/${file}\n---\n\n`;
	writeFileSync(join(to, `${slugOf(file)}.md`), front + text);
}
console.log(`synced ${files.length} docs from ${from}`);

// ── the standard library reference ────────────────────────────────────────────────────────
//
// `fels doc` writes a page per std module from the `///` comments. FELS names the fels to run
// (default: `fels` on the PATH), FELS_STD the std folder (default: ../gabbro/lib/std). Without a
// fels that knows `doc`, the reference is left out and the rest of the site still builds.

import { execFileSync } from 'node:child_process';

const fels = process.env.FELS ?? 'fels';
const stdDir = resolve(process.env.FELS_STD ?? '../gabbro/lib/std');
const apiOut = resolve('.api');
const apiTo = resolve('src/content/docs/std');
rmSync(apiOut, { recursive: true, force: true });
rmSync(apiTo, { recursive: true, force: true });
try {
	execFileSync(fels, ['doc', stdDir, '-o', apiOut], { stdio: ['ignore', 'ignore', 'inherit'] });
	mkdirSync(apiTo, { recursive: true });
	// std.net.tcp → net-tcp; the index is the reference's first page
	const apiSlug = (module) => module.split('.').slice(1).join('-') || module;
	const link = (text) => text.replace(/\]\(([a-z0-9_.]+)\.md\)/g, (_, m) => `](/std/${apiSlug(m)}/)`);
	const pages = readdirSync(apiOut).filter((f) => f.endsWith('.md'));
	for (const file of pages) {
		let text = readFileSync(join(apiOut, file), 'utf8').replace(/\r\n/g, '\n');
		const heading = text.match(/^# (.+)\n/);
		if (heading) text = text.slice(heading[0].length).replace(/^\n+/, '');
		const isIndex = file === 'index.md';
		const name = isIndex ? 'Standard library reference' : heading?.[1] ?? file;
		const intro = isIndex
			? 'Every public declaration of the standard library, made by `fels doc` from the `///` comments in [lib/std](https://github.com/fels-lang/fels/tree/main/lib/std). [Standard library](/docs/stdlib/) is the guide to it.\n\n'
			: '';
		const front = `---\ntitle: ${JSON.stringify(name)}\n${isIndex ? 'sidebar:\n  order: 0\n  label: Overview\n' : ''}editUrl: false\n---\n\n`;
		writeFileSync(join(apiTo, isIndex ? 'index.md' : `${apiSlug(file.replace(/\.md$/, ''))}.md`), front + intro + link(text));
	}
	console.log(`synced ${pages.length - 1} std modules with ${fels}`);
} catch (err) {
	console.warn(`no std reference: \`${fels} doc\` failed (${err.message.split('\n')[0]})`);
}
