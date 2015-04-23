import mylib = require("mylib");
import myotherlib = require('myotherlib');

var a = mylib.myfunc();
var b = myotherlib.myotherfunc();

console.log(typeof a.foo); // string
console.log(typeof b.foo); // number

myotherlib.myAsync().then((x) => {
	console.log(x.foo); // 42
});
