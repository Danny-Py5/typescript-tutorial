// private, static, public are access modifyers

class User {
  private static _allUsers = 0; // shared props to all instances
  constructor(
    public name: string,
    public email: string,
    public readonly id: string
  ) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.increaseUsers();
  }

  private increaseUsers(): void {
    User._allUsers++;
  }

  get getUserName(): string {
    return this.name;
  }

  get getAllUsersNumber(): number {
    return User._allUsers;
  }
  set setAllUsersNumber(newNumber: number) {
    if (newNumber === User._allUsers) {
      User._allUsers = newNumber;
    } else {
      throw new Error("Users number and the current number can't be the same ");
    }
  }
}

const logger = (msg: string | number): void => {
  console.log(msg);
};

// initialization
const user1: User = new User("Daniel", "daniel@g.google", "234sdfa");
const user2: User = new User("Kemisola", "Kemisola@g.google", "as2323");

logger(user2.getAllUsersNumber);
