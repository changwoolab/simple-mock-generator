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
const s = gen.string({
  strlen: 50,
  includeNumber: true,
});
console.log(s);