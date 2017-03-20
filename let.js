"use strict";

var languages = ["Danish","Norwegian"];

for(var i=0;i<languages.length;i++)
{
    console.log('${languages[i]} is a language');
}

console.log(i);

for (let j = 0; j < languages.length; j += 1) {
    console.log(`${languages[j]} is a Scandinavian language.`);
}

try {
    console.log(j); // Reference error
} catch (err) {
    console.log(`You got a ${err}; no dice.`);
}

