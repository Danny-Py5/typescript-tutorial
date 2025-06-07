"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    //   return "Hello";
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(username, email, isPaid) { }
// default parameter for function. if not provided when called, no complain
var loginUser = function (username, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
// Arrow function where the returned value is inferred
var getHello = function (s) {
    return "Hello";
};
// TS knows the the kind of array it is, we don't need to annotate it
var names = ["Daniel", "Gloria", "Blessing", "Samuel"];
names.map(function (name) {
    return "Name is ".concat(name);
    // return 4; // throws error, type number !assignable to type string
});
// A function that don't return a val -> void
function logError(msg) {
    console.log(msg);
    // return 5;  // error, can't return value
}
addTwo(5);
getUpper("Daniel");
signUpUser("Daniel", "daniel@gmail.com", true); // all params must be passed
loginUser("Daniel", "Daniel@gmail.com"); // no complain if 3rd arg not passed. It has default
