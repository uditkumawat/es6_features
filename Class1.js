"use strict";

const internal = {};

internal.Class1 = class{

    constructor(args){
        console.log('Initialize Class Object');
        this.val = args;
    }

    putMethod(x){
        console.log('Public method with the help of private got this value',_method(x));
    }
}

let _val = 12;

function _method(x){
    return _val*x;
}

module.exports = internal.Class1;