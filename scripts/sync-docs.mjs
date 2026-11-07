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
for (const file of files) {
	let text = readFileSync(join(from, file), 'utf8').replace(/\r\n/g, '\n');

	// The first heading becomes the page title; a leading "11. " is dropped.
	const heading = text.match(/^# (.+)\n/);
	const title = heading ? heading[1].replace(/^\d+\.\s*/, '') : slugOf(file);
	if (heading) text = text.slice(heading[0].length).replace(/^\n+/, '');

	// 05_memory_zones.md#x → /docs/memory-zones/#x
	text = text.replace(/\]\((\d+_[a-z0-9_]+\.md)(#[^)]*)?\)/g, (_, f, anchor) => `](/docs/${slugOf(f)}/${anchor ?? ''})`);
	// ../src/sema.zig → the file on GitHub
	text = text.replace(/\]\(\.\.\/([^)]+)\)/g, (_, path) => `](${repo}/${path})`);

	const order = Number(file.match(/^(\d+)/)[1]);
	const front = `---\ntitle: ${JSON.stringify(title.replace(/`/g, ''))}\nsidebar:\n  order: ${order}\neditUrl: ${repo.replace("/blob/", "/edit/")}/docs/${file}\n---\n\n`;
	writeFileSync(join(to, `${slugOf(file)}.md`), front + text);
}
console.log(`synced ${files.length} docs from ${from}`);
