This tree shows a fully working example of having all 'native' Typescript packages.

It is a direct copy of `poelstra2`, and is a proof-of-concept of how external module resolution would work if
https://github.com/Microsoft/TypeScript/issues/2338 is implemented.

It has the following relevant changes compared to `poelstra2`:
* `import ... = require("...");` statements were rewritten from e.g. `myutils` to its 'resolved' equivalent `../node_modules/myutils/dist/index`

It compiles! (using tsc 1.5.0-alpha)

Hovering over the `a` and `b` vars in `myprogram.ts` shows correct types, and if you run it (`node dist/myprogram.js`), it
correctly outputs:
```
string
number
```
