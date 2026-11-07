# fels-lang.github.io

The Fels website: https://fels-lang.github.io

Built with [Starlight](https://starlight.astro.build). The language docs are not kept here: `scripts/sync-docs.mjs`
copies them from [fels/docs](https://github.com/fels-lang/fels/tree/main/docs) at build time
(`FELS_DOCS` names the folder, default `../fels/docs`, a checkout of fels beside this one).
The standard library reference is made by `fels doc` at build time too: `FELS` names the fels to
run (default `fels` on the PATH), `FELS_STD` the std folder (default `../fels/lib/std`).

```sh
npm ci
npm run dev     # http://localhost:4321
npm run build   # into dist/
```
