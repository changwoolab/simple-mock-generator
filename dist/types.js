"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultStringOptions = exports.defaultNumberOptions = exports.defaultDateOptions = exports.Options = void 0;
/**
 * SUPPORTED TYPES: object, string, number, date, boolean
 *
 * NOT SUPPORTED: bigint, symbol, undefined, function
*/
class Options {
    constructor() {
        this.object = {};
    }
}
exports.Options = Options;
;
const defaultDateOptions = () => {
    const min = new Date(new Date().getTime() - Math.random() * 1e12);
    const max = new Date(min.getTime() + Math.random() * 1e12);
    return {
        min,
        max,
    };
};
exports.defaultDateOptions = defaultDateOptions;
exports.defaultNumberOptions = {
    min: 0,
    max: 50,
};
exports.defaultStringOptions = {
    strlen: 10,
    includeNumber: false,
};
