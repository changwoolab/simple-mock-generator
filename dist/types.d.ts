/**
 * SUPPORTED TYPES: object, string, number, date, boolean
 *
 * NOT SUPPORTED: bigint, symbol, undefined, function
*/
export declare class Options {
    constructor();
    object: object;
    depth?: number;
    string?: StringOptions;
    number?: NumberOptions;
    date?: DateOptions;
    boolean?: boolean;
    private bigint?;
    private symbol?;
    private undefined?;
    private function?;
}
export interface DateOptions {
    min: Date;
    max: Date;
}
export declare const defaultDateOptions: () => DateOptions;
export interface NumberOptions {
    min: number;
    max: number;
}
export declare const defaultNumberOptions: NumberOptions;
export interface StringOptions {
    strlen: number;
    includeNumber?: boolean;
}
export declare const defaultStringOptions: StringOptions;
