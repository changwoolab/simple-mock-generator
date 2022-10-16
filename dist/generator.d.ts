import { DateOptions, NumberOptions, Options, StringOptions } from './types';
declare class MockGenerator {
    constructor();
    /**
     * generates number in range ( min <= number < max )
     *
     * default min = 0
     * default max = 50
     */
    number(numberOptions?: NumberOptions): number;
    /**
     * generates number list within provided length in range ( min <= number < max )
     *
     * default min = 0
     * default max = 50
     */
    numberList(length: number, numberOptions?: NumberOptions): number[];
    /**
     * generates date within range min <= date < max
     *
     * default min = random
     * default max = random but bigger than min
     */
    date(dateOptions?: DateOptions): Date;
    /**
     * generates date list within range min <= date < max
     *
     * default min = random
     * default max = random
     */
    dateList(length: number, dateOptions?: DateOptions): Date[];
    /**
     * generates object with random value within provided options
     */
    object(options: Options): object;
    /**
     * generates object list with random value within provided options
     */
    objectList(length: number, options: Options): object[];
    /**
     * generates random string within given string options
     *
     * default strlen = 10,
     * default includeNumber = false
     */
    string(stringOptions?: StringOptions): string;
    /**
     * generates a list of random string within given string options
     *
     * default strlen = 10,
     * default includeNumber = false
     */
    stringList(length: number, stringOptions?: StringOptions): string[];
    /**
     * generates random boolean value
     */
    boolean(): boolean;
    /**
     * generates a list of random boolean value within given length
     */
    booleanList(length: number): boolean[];
    private generateList;
    private selectGenerator;
    private initializeOptions;
    private loopKeysAndGenerate;
}
export { MockGenerator };
