"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name) {
    if (!name) {
        return 'hello, my friend';
    }
    var nameList = Array.isArray(name)
        ? name
        : [name];
    var tracker = buildTracker(nameList);
    var normalGreeting = tracker.normal.length
        ? 'hello, ' + listNames(tracker.normal)
        : '';
    var separator = tracker.normal.length && tracker.loud.length
        ? '. AND '
        : '';
    var loudGreeting = tracker.loud.length
        ? 'HELLO ' + listNames(tracker.loud).toUpperCase() + '!'
        : '';
    return normalGreeting + separator + loudGreeting;
}
exports.greet = greet;
function buildTracker(nameArr) {
    return nameArr.reduce(function (tracker, name) {
        name === name.toUpperCase()
            ? tracker.loud.push(name)
            : tracker.normal.push(name);
        return tracker;
    }, { normal: [], loud: [] });
}
function listNames(names) {
    return names.reduce(function (greeting, name, i, arr) {
        if (i === 0)
            return name;
        if (i === arr.length - 1)
            return greeting + ' and ' + name;
        return greeting + ', ' + name;
    }, '');
}
