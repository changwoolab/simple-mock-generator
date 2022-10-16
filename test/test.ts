import { MockGenerator } from "../src";

class TestType {
  constructor() {
    this.createdAt = new Date();
    this.title = ''
    this.money = 1
  }
  createdAt: Date;
  title: string;
  money: number;
}

const gen = new MockGenerator()
const b = gen.boolean();
console.log(b)

const bl = gen.booleanList(10);
console.log(bl);