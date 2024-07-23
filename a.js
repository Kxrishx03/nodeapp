"use strict";
function isLegal(user) {
    if (user.age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
;
//Implementing a class
class Employee {
    constructor(fn, ln, age) {
        this.firstName = fn;
        this.lastName = ln,
            this.age = age;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.firstName}`);
    }
}
const e = new Employee("Karishma", "Mandal", 18);
console.log(e.greet("Hello everyone"));
function Greeetings(id) {
    console.log("Hello" + id);
}
//enums
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function dosmth(keywords) {
    if (keywords == Direction.Up) {
        console.log("Move up");
    }
}
dosmth(Direction.Up);
