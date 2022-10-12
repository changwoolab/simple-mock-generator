import { generateMockObj } from '../src';

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

const a = generateMockObj(new TestType());
console.log(a);
