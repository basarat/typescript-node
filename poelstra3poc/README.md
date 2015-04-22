This tree shows an almost fully working example of having a mix of native and non-Typescript packages.

It is a direct copy of `poelstra3`, and is a proof-of-concept of how external module resolution would work if
https://github.com/Microsoft/TypeScript/issues/2338 and https://github.com/Microsoft/TypeScript/issues/2839 is implemented.

It has the following relevant changes compared to `poelstra3`:
* `import ... = require("...");` statements were rewritten from e.g. `myutils` to its 'resolved' equivalent `../typings/myutils/index`

It compiles! (using tsc 1.5.0-alpha)

In contrast to `poelstra2poc`, this one doesn't run in practice, because of:
```
$ node ../dist/myprogram.js

module.js:340
    throw err;
          ^
Error: Cannot find module '../typings/myutils/index'
```

That's to be expected, because we made `tsc` happy by resolving to the typings, but that's not where the `.js` lives.

However, hovering over the `a` and `b` vars in `myprogram.ts` shows correct types!
