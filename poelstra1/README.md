This tree shows an example of a package tree with all 'native' Typescript modules, that almost works out-of-the-box in e.g. Atom Typescript
today (2015-04-21).

It uses 'manually' generated declarations (e.g. using https://github.com/SitePen/dts-generator), which include `declare module "..." { }`
and `/// <reference>` lines.

Note how completion works inside of `mylib` and `myotherlib`, but not in `myprogram`, due to the clash of two different versions of
`myutil`.

See `poelstra2` for a modified example that should fix this, once `https://github.com/Microsoft/TypeScript/issues/2338` is implemented.
