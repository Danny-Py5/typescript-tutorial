enum Maturity {
  SUPER = "Super",
  MEDIUM = "Medium",
  LOW = "Low",
  VERY_LOW = "Very Low",
}

abstract class Human {
  public name: string;
  public age: number;
  public height: number;
  private _maturity: "Super" | "Medium" | "Low" | "Very Low";
  public sex: string;
  public alia?: string;

  // public info: string;

  constructor(
    name: string,
    age: number,
    height: number,
    maturity: string,
    sex: string
  ) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.sex = sex;
    // set maturity
    this.marurity = maturity;

    // this.info = `${this.name} is an human and he is ${this.age} years old`;
  }

  // abstract class => has no implimentation. The inherited class implemets the implemetation. Just serves as a blueprint
  abstract work(): void;

  abstract speak(): void;

  abstract walk(): void;

  canSing(): boolean {
    if (this.age >= 10) {
      return true;
    }
    return false;
  }
  getMaturity(): string {
    return this._maturity;
  }
  set marurity(maturity: string) {
    if (Maturity.SUPER === maturity) {
      this._maturity = Maturity.SUPER;
      //
    } else if (Maturity.LOW === maturity) {
      this._maturity = Maturity.LOW;
      //
    } else if (Maturity.MEDIUM === maturity) {
      this._maturity = Maturity.MEDIUM;
      //
    } else {
      this._maturity = Maturity.VERY_LOW;
    }
  }
}

class Family extends Human {
  constructor(
    public name: string,
    public age: number,
    public height: number,
    public sex: string,
    public maturity: string,
    private familyName: string
  ) {
    super(name, age, height, maturity, sex);
    // no need of this. ... for name, age, height, maturity, sex

    this.familyName = familyName;
  }
  speak(): void {
    console.log(this.name, "is speaking");
  }
  walk(): void {
    console.log(this.name, "is walking");
  }
  work(): void {
    console.log(this.name, "is working");
  }
  get getFamilyName(): string {
    return this.familyName;
  }
}

const newFamily: Family = new Family(
  "Daneil",
  21,
  56,
  "male",
  "Low",
  "fatokun"
);
console.log(newFamily.getMaturity());
