"use strict";

var foo="foo";

const CONST_VAR = "Hello";

function baz()
{
    if(foo) {

        var bar = "bar";
        let foobar = foo+bar;
    }

    console.log("This situtation is "+foo+bar +". I am going home");

    try {
        console.log("This log statement is " + foobar + "! It threw a ReferenceError at me!");
    } catch (err) {
        console.log("You got a " + err + "; no dice.");
    }

    try {
        console.log("Just to prove to you that " + err + " doesn't exit outside of the above `catch` block.");
    } catch (err) {
        console.log("Told you so.");
    }
}

baz();

console.log(CONST_VAR);

/*
 The const keyword behaves similarly to let, with two differences.

 You must assign a value to a const-declared variable when you create it. You can't create it first and assign it later.
 You cannot change the vaue of a const-declared variable after you create it. If you try, you'll get a TypeError.
 */

/*
REASONS TO USE let and const

 Neither let nor const-declared variables are hoisted to the top of their scopes, which can make for more readable, less confusing code.
 They limit your variables' visibility as much as possible, which helps prevent confusing namespace collisions.
 It's easier to reason about programs that reassign variables only when absolutely necesary. const helps enforce immutable variable references.
 */

