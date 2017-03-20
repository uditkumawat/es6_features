"use strict";

/*
 The function, Object, has a property, called .prototype, which points to an object (Object.prototype);
 The object, Object.prototype, has a property, called .constructor, which points to a function (Object).
 */

function foo(){
    console.log('Foo!');
}

/*
 All functions have a property, called .prototype, which points to an object associated with that function.
 All function prototypes have a property, called .constructor, which points back to the function.
 */

console.log(foo.prototype);     //points to an object called 'foo'
console.log(foo.prototype.constructor);   //points to function 'foo'


const food = {status:'foobar'};

Object.getPrototypeOf(food)===Object.prototype;

//setting the prototype explicitly with OBJECT.CREATE

const dog = {
    speak(){
        console.log('Bark');
    }
};

const bar = Object.create(dog);

bar.speak();

Object.getPrototypeOf(bar)===dog;