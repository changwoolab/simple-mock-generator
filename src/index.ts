import { generateNumber, NumberOptions } from './number';

class MockGenerator {
  constructor() {}

  number(numberOptions?: NumberOptions) {
    return generateNumber(numberOptions);
  }

  numberList(length: number, numberOptions?: NumberOptions) {
    const numberList: number[] = [];
    for (let i = 0; i < length; i++)
      numberList.push(generateNumber(numberOptions));
    return numberList;
  }

  date() {}

  dateList() {}

  obj() {}

  objList() {}

  string() {}

  stringList() {}
}

export default MockGenerator;
