"use strict";
var ListComponent = (function () {
    function ListComponent() {
        this._things = [];
    }
    Object.defineProperty(ListComponent.prototype, "things", {
        get: function () {
            return this._things;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListComponent.prototype, "length", {
        get: function () {
            return this._things.length;
        },
        enumerable: true,
        configurable: true
    });
    ListComponent.prototype.add = function (item, password) {
        if (this.validate(password)) {
            this._things.push(item);
            return true;
        }
        else {
            return false;
        }
    };
    ListComponent.prototype.validate = function (password) {
        if (password === '12345') {
            return true;
        }
        else {
            return false;
        }
    };
    return ListComponent;
}());
var ListItem = (function () {
    function ListItem(name) {
        this._name = name;
    }
    Object.defineProperty(ListItem.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    return ListItem;
}());
var PASS = '12345';
var item = new ListItem('Thing to Do');
var list_one = new ListComponent();
var list_two = new ListComponent();
console.log(list_one.add(item, PASS)); // true
console.log(list_one.length); // 1
console.log(list_two.add(item, 'WRONG password')); // false
console.log(list_two.length); // 0
// console.log(list_one.validate('12345')); // Compiler error 
