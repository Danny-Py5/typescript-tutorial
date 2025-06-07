function addTwo(num: number): number {
  return num + 2;
  //   return "Hello";
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(username: string, email: string, isPaid: boolean) {}

// default parameter for function. if not provided when called, no complain
const loginUser = (
  username: string,
  email: string,
  isPaid: boolean = false
) => {};

// Arrow function where the returned value is inferred
const getHello = (s: string): string => {
  return "Hello";
};

// TS knows the the kind of array it is, we don't need to annotate it
const names = ["Daniel", "Gloria", "Blessing", "Samuel"];
names.map((name): string => {
  return `Name is ${name}`;
  // return 4; // throws error, type number !assignable to type string
});

// A function that don't return a val -> void
function logError(msg: string): void {
  console.log(msg);
  // return 5;  // error, can't return value
}

// a function that never and ever return anything like throwing error
function throwError(param: string): never {
  throw new Error();
}

addTwo(5);
getUpper("Daniel");
signUpUser("Daniel", "daniel@gmail.com", true); // all params must be passed
loginUser("Daniel", "Daniel@gmail.com"); // no complain if 3rd arg not passed. It has default

export {};
