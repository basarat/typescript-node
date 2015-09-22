import mylib = require("mylib");
import myotherlib = require("myotherlib");

function assert(cond: boolean): void {
	if (!cond) {
		throw new Error("assertion failed");
	}
}

var a = mylib.myfunc();
var b = myotherlib.myotherfunc();

var str: string = a.foo;
var num: number = b.foo;

assert(typeof a.foo === "string");
assert(typeof b.foo === "number");

myotherlib.myAsync().then((x) => {
	console.log(x.foo); // 42
});

// These should give compile errors:
// var p: Promise; // Promise is ambiently declared through `myotherlib`, but should not leak to here
// var b: Buffer; // again ambiently declared through `myotherlib`
