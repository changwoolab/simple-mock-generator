"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockGenerator = void 0;
const types_1 = require("./types");
class MockGenerator {
    constructor() { }
    /**
     * generates number in range ( min <= number < max )
     *
     * default min = 0
     * default max = 50
     */
    number(numberOptions) {
        const { min, max } = numberOptions ? numberOptions : types_1.defaultNumberOptions;
        if (max < min)
            throw new Error('max is smaller than min');
        return min + Math.floor(Math.random() * (max - min));
    }
    /**
     * generates number list within provided length in range ( min <= number < max )
     *
     * default min = 0
     * default max = 50
     */
    numberList(length, numberOptions) {
        return this.generateList(length, 'number', numberOptions);
    }
    /**
     * generates date within range min <= date < max
     *
     * default min = random
     * default max = random but bigger than min
     */
    date(dateOptions) {
        const { min, max } = dateOptions ? dateOptions : (0, types_1.defaultDateOptions)();
        return new Date(min.getTime() + Math.random() * (max.getTime() - min.getTime()));
    }
    /**
     * generates date list within range min <= date < max
     *
     * default min = random
     * default max = random
     */
    dateList(length, dateOptions) {
        return this.generateList(length, 'date', dateOptions);
    }
    /**
     * generates object with random value within provided options
     */
    object(options) {
        const initializedOptions = this.initializeOptions(options);
        const newobject = this.loopKeysAndGenerate(initializedOptions);
        return newobject;
    }
    /**
     * generates object list with random value within provided options
     */
    objectList(length, options) {
        return this.generateList(length, 'object', options);
    }
    /**
     * generates random string within given string options
     *
     * default strlen = 10,
     * default includeNumber = false
     */
    string(stringOptions) {
        const { strlen, includeNumber = false } = stringOptions
            ? stringOptions
            : types_1.defaultStringOptions;
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        if (includeNumber)
            characters += '0123456789';
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
    stringList(length, stringOptions) {
        return this.generateList(length, 'string', stringOptions);
    }
    /**
     * generates random boolean value
     */
    boolean() {
        const random = Math.random();
        return random > 0.5;
    }
    /**
     * generates a list of random boolean value within given length
     */
    booleanList(length) {
        return this.generateList(length, 'boolean');
    }
    generateList(length, type, options) {
        const pusher = this.selectGenerator(type).bind(this);
        const li = [];
        for (let i = 0; i < length; i++) {
            li.push(pusher(options));
        }
        return li;
    }
    selectGenerator(type) {
        switch (type) {
            case 'number':
                return this.number;
            case 'date':
                return this.date;
            case 'string':
                return this.string;
            case 'object':
                return this.object;
            case 'boolean':
                return this.boolean;
            default:
                throw new Error(`type '${type}' is not supported`);
        }
    }
    initializeOptions(options) {
        const { object, depth = 0, string = types_1.defaultStringOptions, number = types_1.defaultNumberOptions, date = (0, types_1.defaultDateOptions)(), } = options;
        return {
            object,
            depth,
            string,
            number,
            date,
        };
    }
    loopKeysAndGenerate(options) {
        const { object, depth = 0 } = options;
        if (depth > 500)
            throw new Error('Depth limit exceeded');
        const newObj = {};
        const keys = Object.keys(object);
        for (const key of keys) {
            const value = object[key];
            const type = value instanceof Date ? 'date' : typeof value;
            const generator = this.selectGenerator(type);
            options.depth = depth + 1;
            newObj[key] = generator(options[type]);
        }
        return newObj;
    }
}
exports.MockGenerator = MockGenerator;
