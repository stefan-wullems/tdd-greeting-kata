"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
test('greet(name = Stefan) should return "hello, Stefan"', function () {
    var name = 'Stefan';
    var greeting = _1.greet(name);
    expect(greeting).toBe('hello, Stefan');
});
test('greet(name = null) should return "hello, my friend', function () {
    var name = null;
    var greeting = _1.greet(name);
    expect(greeting).toBe('hello, my friend');
});
test('greet(name = STEFAN) should return "HELLO STEFAN"', function () {
    var name = 'STEFAN';
    var greeting = _1.greet(name);
    expect(greeting).toBe('HELLO STEFAN!');
});
test('greet(name = [stefan, joyce] should return "hello, stefan and joyce"', function () {
    var name = ['stefan', 'joyce'];
    var greeting = _1.greet(name);
    expect(greeting).toBe('hello, stefan and joyce');
});
test('greet(name = [stefan, joyce, kathe] should return "hello, stefan, joyce and kathe"', function () {
    var name = ['stefan', 'joyce', 'kathe'];
    var greeting = _1.greet(name);
    expect(greeting).toBe('hello, stefan, joyce and kathe');
});
test('greet(name = [stefan, JOYCE, kathe] should return "hello, stefan and kathe. AND HELLO JOYCE!"', function () {
    var name = ['stefan', 'JOYCE', 'kathe'];
    var greeting = _1.greet(name);
    expect(greeting).toBe('hello, stefan and kathe. AND HELLO JOYCE!');
});
