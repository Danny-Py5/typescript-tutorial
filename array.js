"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var names = []; // or names: Array<string>
var ages = []; // or ages: Array<number>
var users = []; // array of user objs where their properties are name and isLoggedIn
// User[][]
var twoDArray = [[{ name: "Daniel", isLoggedIn: true }]];
names.push("Daniel");
ages.push(4);
users.push({ name: "Daniel", isLoggedIn: true });
twoDArray.push([{ name: "Gloria", isLoggedIn: false, isDeveloper: false }]);
