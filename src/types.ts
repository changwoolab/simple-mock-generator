/**
 * SUPPORTED TYPES: object, string, number, date, boolean
 * 
 * NOT SUPPORTED: bigint, symbol, undefined, function
*/
export class Options {
  constructor() {
    this.object = {};
  }
  public object: object;
  public depth?: number;
  public string?: StringOptions;
  public number?: NumberOptions;
  public date?: DateOptions;
  public boolean?: boolean;

  // NOT SUPPORTED
  private bigint?: bigint;
  private symbol?: symbol;
  private undefined?: undefined;
  private function?: Function;
};

export interface DateOptions {
  min: Date;
  max: Date;
}

export const defaultDateOptions = (): DateOptions => {
  const min = new Date(new Date().getTime() - Math.random() * 1e12);
  const max = new Date(min.getTime() + Math.random() * 1e12);
  return {
    min,
    max,
  };
};

export interface NumberOptions {
  min: number;
  max: number;
}

export const defaultNumberOptions: NumberOptions = {
  min: 0,
  max: 50,
};

export interface StringOptions {
  strlen: number;
  includeNumber?: boolean;
}

export const defaultStringOptions: StringOptions = {
  strlen: 10,
  includeNumber: false,
};
