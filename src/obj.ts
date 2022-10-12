import { generateDate } from './date';
import { generateNumber } from './number';
import { generateString } from './string';

export function generateMockObj(obj: any) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    const value = obj[key];
    if (value instanceof Date) {
      obj[key] = generateDate();
    } else if (typeof value === 'object') {
      generateMockObj(obj[key]);
    } else if (typeof value === 'number') {
      obj[key] = generateNumber();
    } else if (typeof value === 'string') {
      obj[key] = generateString(10);
    }
  }
  return obj;
}

export function generateMockObjList(obj: any, cnt: number) {
  const objList: any[] = [];
  for (let i = 0; i < cnt; i++) objList.push(generateMockObj(obj));
  return objList;
}
