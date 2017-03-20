"use strict";

function Module(){

    function foo(){
        return 'foo';
    }

    function bar(){
        return 'bar';
    }

    const publicAPI = {foo,bar};

    return publicAPI;
}

let obj = Module();
