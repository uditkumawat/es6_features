"use strict";


/*
 Classes can only contain method definitions, not data properties;

 When defining methods, you use shorthand method definitions;

 Unlike when creating objects, you do not separate method definitions in class bodies with commas; and

 You can refer to properties on instances of the class directly.

 */

class Person {

    constructor(name,surname) {

        this.name = name;
        this.surname = surname;
    }

    toString(){
        return this.name+" "+this.surname;
    }

    print(){
        console.log(this.toString());
    }
}

const boy = new Person("Udit","Kumawat");

boy.print();