import { DateOptions, generateDate } from './date';
import { generateNumber, NumberOptions } from './number';
import { generateString, StringOptions } from './string';

type Options = {
    stringOptions?: StringOptions;
    numberOptions?: NumberOptions;
    dateOptions?: DateOptions;
}

export function generateMockObj(obj: any, options?: Options, depth: number = 0) {
  if (depth > 500) throw new Error('Depth limit exceeded');
  const keys = Object.keys(obj);
  for (const key of keys) {
    const value = obj[key];
    if (value instanceof Date) {
      obj[key] = generateDate();
    } else if (typeof value === 'object') {
      generateMockObj(obj[key], options, depth + 1);
    } else if (typeof value === 'number') {
      obj[key] = generateNumber();
    } else if (typeof value === 'string') {
      obj[key] = generateString();
    }
  }
  return obj;
}

export function generateMockObjList(obj: any, cnt: number) {
  const objList: any[] = [];
  for (let i = 0; i < cnt; i++) objList.push(generateMockObj(obj));
  return objList;
}
