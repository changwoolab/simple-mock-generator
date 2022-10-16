"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
class TestType {
    constructor() {
        this.createdAt = new Date();
        this.title = '';
        this.money = 1;
    }
}
const gen = new src_1.MockGenerator();
const b = gen.boolean();
console.log(b);
const bl = gen.booleanList(10);
console.log(bl);
