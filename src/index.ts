import { DateOptions, defaultDateOptions } from './date';
import { defaultNumberOptions, NumberOptions } from './number';
import { Options } from './obj';
import { defaultStringOptions, StringOptions } from './string';

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
    return this.generateList<number, NumberOptions>(
      length,
      'number',
      numberOptions
    );
  }

  public date(dateOptions?: DateOptions) {
    const { min, max } = dateOptions ? dateOptions : defaultDateOptions();
    return new Date(
      min.getTime() + Math.random() * (max.getTime() - min.getTime())
    );
  }

  public dateList(length: number, dateOptions?: DateOptions) {
    return this.generateList<Date, DateOptions>(length, 'date', dateOptions);
  }

  public object(options: Options): object {
    options = this.initializeOptions(options);

    const newobject = this.loopKeysAndGenerate(options);

    return newobject;
  }

  public objectList(object: any, length: number) {
    const objectList: any[] = [];
    for (let i = 0; i < length; i++) objectList.push(this.object(object));
    return objectList;
  }

  public string(stringOptions: StringOptions) {
    const { length } = stringOptions;
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
    const pusher = this.selectGenerator(type);
    const li: T[] = [];
    for (let i = 0; i < length; i++) {
      li.push(pusher(options));
    }
    return li;
  }

  private selectGenerator(type: string): Function {
    if (type === 'number') {
      return this.number;
    } else if (type === 'date') {
      return this.date;
    } else if (type === 'string') {
      return this.string;
    } else if (type === 'object') {
      return this.object;
    } else {
      throw new Error('invalid function type');
    }
  }

  private initializeOptions(options: Options): Options {
    const {
      object,
      depth = 0,
      string = defaultStringOptions,
      number = defaultNumberOptions,
      date = defaultDateOptions(),
    } = options;

    return { object, depth, string, number, date };
  }

  private loopKeysAndGenerate(options: Options): object {
    const { object, depth = 0 } = options;
    if (depth > 500) throw new Error('Depth limit exceeded');

    const keys = Object.keys(object);
    for (const key of keys) {
      const value: any = object[key as keyof object];
      const type = value instanceof Date ? 'date' : typeof value;
      const generator = this.selectGenerator(type);
      options.depth = depth + 1;
      object[key as keyof object] = generator(options[type]) as never;
    }
    return object;
  }
}

export default MockGenerator;
