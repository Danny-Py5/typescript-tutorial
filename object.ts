// const User = {
//   name: "Daniel Olatunde",
//   email: "olatundedaniel943@gmail.com",
//   isActive: true,
// };

// const newUser = { name: "Daniel", isPaid: true, isLog: true };

// function createUser(user: { name: string; isPaid: boolean }) {}

// createUser(newUser);

// // infer to return obj
// function createCourse(): { name: string; isPaid: boolean } {
//   return { name: "Typescript", isPaid: false };
// }
// console.log(createCourse());

//-----------------------------------------------
// type alias
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

// take obj of type of User and return obj of type of User as well
function createUser(user: User): User {
  return { name: "", email: "", isActive: false };
}
createUser({ name: "", email: "", isActive: false });
export {};
