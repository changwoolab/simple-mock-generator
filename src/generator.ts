import {
  DateOptions,
  defaultDateOptions,
  defaultNumberOptions,
  defaultStringOptions,
  NumberOptions,
  Options,
  StringOptions,
} from './types';

class MockGenerator {
  constructor() {}
  /**
   * generates number in range ( min <= number < max )
   *
   * default min = 0
   * default max = 50
   */
  public number(numberOptions?: NumberOptions): number {
    const { min, max } = numberOptions ? numberOptions : defaultNumberOptions;
    if (max < min) throw new Error('max is smaller than min');
    return min + Math.floor(Math.random() * (max - min));
  }

  /**
   * generates number list within provided length in range ( min <= number < max )
   *
   * default min = 0
   * default max = 50
   */
  public numberList(length: number, numberOptions?: NumberOptions): number[] {
    return this.generateList<number, NumberOptions>(
      length,
      'number',
      numberOptions
    );
  }

  /**
   * generates date within range min <= date < max
   *
   * default min = random
   * default max = random but bigger than min
   */
  public date(dateOptions?: DateOptions): Date {
    const { min, max } = dateOptions ? dateOptions : defaultDateOptions();
    return new Date(
      min.getTime() + Math.random() * (max.getTime() - min.getTime())
    );
  }

  /**
   * generates date list within range min <= date < max
   *
   * default min = random
   * default max = random
   */
  public dateList(length: number, dateOptions?: DateOptions): Date[] {
    return this.generateList<Date, DateOptions>(length, 'date', dateOptions);
  }

  /**
   * generates object with random value within provided options
   */
  public object(options: Options): object {
    const initializedOptions = this.initializeOptions(options);

    const newobject = this.loopKeysAndGenerate(initializedOptions);

    return newobject;
  }

  /**
   * generates object list with random value within provided options
   */
  public objectList(length: number, options: Options): object[] {
    return this.generateList<object, Options>(length, 'object', options);
  }

  /**
   * generates random string within given string options
   *
   * default strlen = 10,
   * default includeNumber = false
   */
  public string(stringOptions?: StringOptions): string {
    const { strlen, includeNumber = false } = stringOptions
      ? stringOptions
      : defaultStringOptions;
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (includeNumber) characters += '0123456789';

    const charLen = characters.length;
    for (let i = 0; i < strlen; i++) {
      result += characters.charAt(Math.floor(Math.random() * charLen));
    }
    return result;
  }

  /**
   * generates a list of random string within given string options
   *
   * default strlen = 10,
   * default includeNumber = false
   */
  public stringList(length: number, stringOptions?: StringOptions): string[] {
    return this.generateList<string, StringOptions>(
      length,
      'string',
      stringOptions
    );
  }

  private generateList<T, U>(length: number, type: string, options?: U): T[] {
    const pusher = this.selectGenerator(type).bind(this);
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

    return {
      object,
      depth,
      string,
      number,
      date,
    };
  }

  private loopKeysAndGenerate(options: Options): object {
    const { object, depth = 0 } = options;
    if (depth > 500) throw new Error('Depth limit exceeded');

    const newObj = {};
    const keys = Object.keys(object);
    for (const key of keys) {
      const value: any = object[key as keyof object];
      const type = value instanceof Date ? 'date' : typeof value;
      const generator = this.selectGenerator(type);
      options.depth = depth + 1;
      newObj[key as keyof object] = generator(options[type]) as never;
    }
    return newObj;
  }
}

export { MockGenerator };
