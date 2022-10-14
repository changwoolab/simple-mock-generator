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
const d = gen.date()
console.log(d);

const a = gen.dateList(10)
console.log(a)
