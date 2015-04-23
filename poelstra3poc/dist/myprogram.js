var mylib = require("../node_modules/mylib/dist/index");
var myotherlib = require('../node_modules/myotherlib/dist/index');
var a = mylib.myfunc();
var b = myotherlib.myotherfunc();
console.log(typeof a.foo);
console.log(typeof b.foo);
myotherlib.myAsync().then(function (x) {
    console.log(x.foo);
});
