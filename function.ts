function addTwo(num: number) {
  return num + 2;
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
addTwo(5);
getUpper("Daniel");
signUpUser("Daniel", "daniel@gmail.com", true); // all params must be passed
loginUser("Daniel", "Daniel@gmail.com"); // no complain if 3rd arg not passed. It has default

export {};
