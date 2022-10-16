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

const a = undefined;

const bl = gen.object({
  object: new TestType(),
  string: { strlen: 17 },
});
console.log(bl);