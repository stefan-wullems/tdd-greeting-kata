"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
test('greet(name) should return "hello {name}"', function () {
    var name = 'Stefan';
    var greeting = __1.greet(name);
    expect(greeting).toBe('hello');
});
