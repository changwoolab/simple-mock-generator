/** TODO! */
export declare type Options = {
    object: object;
    depth?: number;
    string?: StringOptions;
    number?: NumberOptions;
    date?: DateOptions;
    boolean?: boolean;
    bigint?: bigint;
    symbol?: symbol;
    undefined?: undefined;
    function?: Function;
};
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
