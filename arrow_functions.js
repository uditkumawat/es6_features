"use strict";

let names = ["UDIT","Kumawat"];


console.log(names);

/*
 // In a multiline arrow function, you must use curly braces,
 //  and you must include an explicit return statement.
 */

let names_lower = names.map((name)=>{
   return name.toLowerCase();
});

console.log(names_lower);

// In a single-line arrow function, curly braces are optional,
//   and the function implicitly returns the value of the last expression.
//   You can include a return statement if you'd like, but it's optional.
let namesLower = names.map((name) => name.toLowerCase());

// If your arrow function only takes one argument, you don't need to wrap it in
//   parentheses.
let nameslower = names.map(name => name.toLowerCase());


console.log(namesLower);

console.log(namesLower);