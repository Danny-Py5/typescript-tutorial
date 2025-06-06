"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(username, email, isPaid) { }
// default parameter for function. if not provided when called, no complain
var loginUser = function (username, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
getUpper("Daniel");
signUpUser("Daniel", "daniel@gmail.com", true); // all params must be passed
loginUser("Daniel", "Daniel@gmail.com"); // no complain if 3rd arg not passed. It has default
