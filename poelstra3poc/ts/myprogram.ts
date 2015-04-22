import mylib = require("../node_modules/mylib/dist/index"); // would be just `require("mylib")`, faking the resolve here...`
import myotherlib = require('../node_modules/myotherlib/dist/index'); // would be just `require("myotherlib")`, faking the resolve here...`

var a = mylib.myfunc();
var b = myotherlib.myotherfunc();

console.log(typeof a.foo); // string
console.log(typeof b.foo); // number

myotherlib.bleh().then((x) => {
	console.log(x.foo); // 42
});
