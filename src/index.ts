import { DateOptions } from './date';
import { defaultNumberOptions, NumberOptions } from './number';
import { StringOptions } from './string';

class MockGenerator {
  constructor() {}
  /**
   * generate number in range ( min <= number < max )
   *
   * default min = 0    
   * default max = 50
   */
  public number(numberOptions?: NumberOptions) {
    const { min, max } = numberOptions ? numberOptions : defaultNumberOptions;
    if (max < min) throw new Error('max is smaller than min');
    return min + Math.floor(Math.random() * (max - min));
  }

  /**
   * generate number list within provided length in range ( min <= number < max )
   *
   * default min = 0    
   * default max = 50
   */
  public numberList(length: number, numberOptions?: NumberOptions) {
    return this.generateList<number, NumberOptions>(length, 'number', numberOptions);
  }

  public date(dateOptions?: DateOptions) {
    return new Date();
  }

  public dateList(length: number, dateOptions?: DateOptions) {
    return this.generateList<Date, DateOptions>(length, 'date', dateOptions);
  }

  public obj() {}

  public objList() {}

  public string(length: number, stringOptions?: StringOptions) {
    let result = '';
    let characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charLen = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charLen));
    }
    return result;
  }

  public stringList() {}

  private generateList<T, U>(length: number, type: string, options?: U): T[] {
    const pusher = this.selectPusher(type);
    const li: T[] = [];
    for (let i = 0; i < length; i++) {
      li.push(pusher(options));
    }
    return li;
  }

  private selectPusher(type: string): Function {
    if (type === 'number') {
      return this.number;
    } else if (type === 'date') {
      return this.date;
    } else if (type === 'string'){
      return this.string;
    } else {
      throw new Error('invalid function type')
    }
  }
}

export default MockGenerator;
