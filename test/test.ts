import MockDataGenerator from '../src';

class TestType {
  constructor() {
    this.createdAt = new Date('2022-10-11T01:32:18.375Z');
    this.title = 'asdf';
    this.money = 1231;
  }
  createdAt: Date;
  title: string;
  money: number;
}

const a = MockDataGenerator(new TestType());
console.log(a);
