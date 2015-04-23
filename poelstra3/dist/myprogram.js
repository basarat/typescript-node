var mylib = require("mylib");
var myotherlib = require('myotherlib');
var a = mylib.myfunc();
var b = myotherlib.myotherfunc();
console.log(typeof a.foo);
console.log(typeof b.foo);
myotherlib.myAsync().then(function (x) {
    console.log(x.foo);
});
