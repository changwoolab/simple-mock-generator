import MockGenerator from '../src';

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
const a = gen.number();
console.log(a);

const al = gen.numberList(13);
console.log(al);
