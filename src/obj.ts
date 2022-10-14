import { DateOptions } from "./date";
import { NumberOptions } from "./number";
import { StringOptions } from "./string";

export type Options = {
  obj: any;
  depth?: number;
  stringOptions?: StringOptions;
  numberOptions?: NumberOptions;
  dateOptions?: DateOptions;
};
