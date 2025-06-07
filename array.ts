type bool = boolean;

type User = {
  name: string;
  isLoggedIn: bool;
  isDeveloper?: bool;
};

const names: string[] = []; // or names: Array<string>
const ages: number[] = []; // or ages: Array<number>
const users: User[] = []; // array of user objs where their properties are name and isLoggedIn
// User[][]
const twoDArray: Array<User>[] = [[{ name: "Daniel", isLoggedIn: true }]];

names.push("Daniel");
ages.push(4);
users.push({ name: "Daniel", isLoggedIn: true });
twoDArray.push([{ name: "Gloria", isLoggedIn: false, isDeveloper: false }]);
export {};
