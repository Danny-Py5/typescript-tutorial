"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scores = 55;
scores = "55";
var daniel = { name: "Daniel", id: 555 };
// in future I may be Admin
daniel = { username: "Dannypy", id: 555 };
function getUser(id) {
    // Id could be num or str so ts won't know which props it should provide when we try id.
    //   id.toLowerCase() // results to error
    // but if checked, ts will be ok
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// Array
var data = [1, 2, 3];
var data2 = ["Blessing", "Daniel", "Samuel"];
var data3 = [1, 2, "4"]; // array of num and str
var data4 = [1, 2, "Dude", false]; // arr of num, str, bools
// NOTE: it is not good to just say Any[] = []
// when a val should only have either of more than one values
var stubborn;
stubborn = "Daniel";
stubborn = "Gloria";
// literal union type
var name = 4;
name = "4";
