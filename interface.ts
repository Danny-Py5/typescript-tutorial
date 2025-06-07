// watch 2:30...
type bool = boolean;

interface User {
  name: string;
  email: string;
  readonly id: string;
  isLoggedIn: bool;
  kill(): void;
}

interface Admin extends User {
  role: "Admin" | "General User";
}

function createUser(data: Admin | User): Admin | User {
  return {
    name: data.name,
    email: data.email,
    id: data.id,
    isLoggedIn: data.isLoggedIn,
    kill: () => "Account killed",
    role: "Admin",
  };
}

const user1: Admin | User = createUser({
  name: "Daniel Olatunde",
  email: "OlatundeDaniel@gmail.com",
  id: "adsfa234.id",
  isLoggedIn: false,
  kill: () => "",
  role: "Admin",
});

// using with class
class MyApp implements User, Admin {
  // protected used to share private value across classes (parent and child)
  protected _usedTime: number = 3;

  constructor(
    public name: string,
    public email: string,
    public readonly id: string,
    public isLoggedIn: bool,
    public role: "Admin",
    public kill: () => ""
  ) {}
}

class FamilyUsedMyApp extends MyApp {
  getUsedTime(): number {
    return this._usedTime;
  }
}

const family: FamilyUsedMyApp = new FamilyUsedMyApp(
  "Daniel",
  "da@da.com",
  "ads323.id",
  false,
  "Admin",
  () => ""
);
console.log(family.getUsedTime());
export {};
