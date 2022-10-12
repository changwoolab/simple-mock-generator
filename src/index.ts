import { generateDate } from './date';
import { generateNumber } from './number';
import { generateString } from './string';

function MockClassDataGenerator(c: any) {
  const keys = Object.keys(c);
  for (const key of keys) {
    const value = c[key];
    if (value instanceof Date) {
      c[key] = generateDate();
    } else if (typeof value === 'number') {
      c[key] = generateNumber();
    } else if (typeof value === 'string') {
      c[key] = generateString(10);
    }
  }
  return c;
}

function MockDataGenerator<T>(input: T): T {
  if (typeof input === 'object') {
    MockClassDataGenerator(input);
  }
  return input;
}



export default MockDataGenerator;
export * from './date';
export * from './number';
export * from './string';
