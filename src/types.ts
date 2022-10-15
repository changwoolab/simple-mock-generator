/** TODO! */
export type Options = {
  object: object;
  depth?: number;
  string?: StringOptions;
  number?: NumberOptions;
  date?: DateOptions;

  // TODO!!
  bigint?: bigint;
  boolean?: boolean;
  symbol?: symbol;
  undefined?: undefined;
  function?: Function;
};

export interface DateOptions {
  min: Date;
  max: Date;
}

export const defaultDateOptions = (): DateOptions => ({
  min: new Date(new Date().getTime() - Math.random() * 1e12),
  max: new Date(new Date().getTime() - Math.random() * 1e11),
});

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
};

export const defaultStringOptions: StringOptions = {
  strlen: 10,
  includeNumber: true,
};