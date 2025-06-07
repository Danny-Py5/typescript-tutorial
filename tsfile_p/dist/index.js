"use strict";
// private, static, public are access modifyers
class User {
    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.name = name;
        this.email = email;
        this.id = id;
        this.increaseUsers();
    }
    increaseUsers() {
        User._allUsers++;
    }
    get getUserName() {
        return this.name;
    }
    get getAllUsersNumber() {
        return User._allUsers;
    }
    set setAllUsersNumber(newNumber) {
        if (newNumber === User._allUsers) {
            User._allUsers = newNumber;
        }
        else {
            throw new Error("Users number and the current number can't be the same ");
        }
    }
}
User._allUsers = 0; // shared props to all instances
const logger = (msg) => {
    console.log(msg);
};
// initialization
const user1 = new User("Daniel", "daniel@g.google", "234sdfa");
const user2 = new User("Kemisola", "Kemisola@g.google", "as2323");
logger(user2.getAllUsersNumber);
