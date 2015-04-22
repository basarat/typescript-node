import mylib = require("../node_modules/mylib/dist/index");
import myotherlib = require('../node_modules/myotherlib/dist/index');

var a = mylib.myfunc();
var b = myotherlib.myotherfunc();

console.log(typeof a.foo); // string
console.log(typeof b.foo); // number
