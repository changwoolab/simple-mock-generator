import { DateOptions } from "./date";
import { NumberOptions } from "./number";
import { StringOptions } from "./string";

/** TODO! */
export type Options = {
  object: object;
  depth?: number;
  string?: StringOptions;
  number?: NumberOptions;
  date?: DateOptions;
  bigint?: bigint;
  boolean?: boolean;
  symbol?: symbol;
  undefined?: undefined;
  function?: Function;
};
