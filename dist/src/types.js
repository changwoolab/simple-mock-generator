"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultStringOptions = exports.defaultNumberOptions = exports.defaultDateOptions = void 0;
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
