var mylib = require("mylib");
var myotherlib = require("myotherlib");
function assert(cond) {
    if (!cond) {
        throw new Error("assertion failed");
    }
}
var a = mylib.myfunc();
var b = myotherlib.myotherfunc();
var str = a.foo;
var num = b.foo;
assert(typeof a.foo === "string");
assert(typeof b.foo === "number");
myotherlib.myAsync().then(function (x) {
    console.log(x.foo); // 42
});
// These should give compile errors:
// var p: Promise; // Promise is ambiently declared through `myotherlib`, but should not leak to here
// var b: Buffer; // again ambiently declared through `myotherlib`
