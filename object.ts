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
// // type alias
// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// // take obj of type of User and return obj of type of User as well
// function createUser(user: User): User {
//   return { name: "", email: "", isActive: false };
// }
// createUser({ name: "", email: "", isActive: false });

// ----------------------------------------------
// readonly
type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number; // ? optional.  Could be set or not
};

let newUser: User = {
  _id: "12345",
  name: "Daniel",
  email: "daniel@gmail.com",
  isActive: true,
  // No complain as creditCardDetails not ser -- optional
};
// accessing and modifying
newUser.name = "gloria";
// newUser._id = newUser._id + "changed"; // error, can't change a readonly property

// there may be some cases where a new type is the combination of existing type(s) + it own new property(s) type
type Male = {
  name: string;
  height: number;
  age: number;
  hasDeepVoice?: boolean;
};
type Quality = {
  isBeautiful: boolean;
  canDance: boolean;
  isAttractive: boolean;
};
// type female will have name, height, age, hasDeepVoice, isBeautiful, canDance, isAttractive and it own set properties
type Female = Male &
  Quality & {
    hasThinVoice?: boolean;
    hasBoyFriend: boolean;
    boyFriendName: string;
  };

const newFemale: Female = {
  name: "Gloria",
  height: 44,
  age: 18,
  hasDeepVoice: false, // might not have this property - Optional
  hasThinVoice: true,
  isBeautiful: true,
  canDance: true,
  isAttractive: true,
  hasBoyFriend: true,
  boyFriendName: "Daniel Olatunde",
};

export {};
