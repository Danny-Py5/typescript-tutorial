type Constrain_1 = {
  name: string;
  age: number;
};

class User implements Constrain_1 {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
}

export {};
