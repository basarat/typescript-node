This tree shows an example of having two 'native' Typescript packages (`mylib` and `myotherlib`),
that both use a different version of the same non-TS package (`myutils`).

It is meant as a test for https://github.com/Microsoft/TypeScript/pull/4913

To make the example even more interesting, both ambient typings (`declare module "..." { }`) and 'proper external' typings are used.
In `myotherlib`, `myutils` is proper external, but Bluebird and node were added as ambient typings (directly taken from DefinitelyTyped).

To test this yourself:
```sh
# Build the compiler with scoped-packages support (#4913)
git clone git@github.com:weswigham/TypeScript.git
cd TypeScript
git checkout package-scopes
jake local

# Build and run this project using the new compiler
cd ..
git clone https://github.com/basarat/typescript-node
cd typescript-node/poelstra4
node ../TypeScript/built/local/tsc.js
npm install bluebird
node myprogram.js
```

Interesting things to note:
* It compiles and runs! :)
* Both versions of `myutils` can co-exist, i.e. the results from the function calls in `myprogram.ts` can be resolved,
  and the type of the `.foo` property is correct
* The `Promise` type and e.g. `Buffer` are not available in `myprogram.ts` (this is indeed the intended behaviour!)
* Typings for `myutils` need to be stored in `node_modules` to be found as external modules. They are typically
  provided by the 'parent' package (such as `mylib` and `myotherlib`), but the `node_modules` directory is not
  typically part of a repository/package. So either tooling should handle this, or a configurable search path
  (similar to, but different from `typings`) needs to be defined.
* `myotherlib` contains a bluebird typing straight from DT, but also needs a 'wrapper' in
  `myotherlib/node_modules/bluebird.d.ts` to make `myotherlib/index.d.ts` work when included from `myprogram`.
  Same remark on having to provide the file in `node_modules`.
