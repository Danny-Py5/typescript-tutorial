let scores: number | string = 55;
scores = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};
let daniel: User | Admin = { name: "Daniel", id: 555 };
// in future I may be Admin
daniel = { username: "Dannypy", id: 555 };

function getUser(id: number | string) {
  // Id could be num or str so ts won't know which props it should provide when we try id.
  //   id.toLowerCase() // results to error
  // but if checked, ts will be ok
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

// Array
const data: number[] = [1, 2, 3];
const data2: string[] = ["Blessing", "Daniel", "Samuel"];
const data3: (string | number)[] = [1, 2, "4"]; // array of num and str
const data4: (string | number | boolean)[] = [1, 2, "Dude", false]; // arr of num, str, bools
// NOTE: it is not good to just say Any[] = []

// when a val should only have either of more than one values
let stubborn: "Daniel" | "Gloria";
stubborn = "Daniel";
stubborn = "Gloria";

// literal union type
let name: string | number = 4;
name = "4";

export {};
