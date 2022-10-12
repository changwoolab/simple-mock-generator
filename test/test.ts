import MockDataGenerator from '../src';

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

const a = MockDataGenerator<TestType>(new TestType());
console.log(a);
