"use strict";

class Person{
    
    constructor(name,surname){
        this.name = name;
        this.surname = surname;
    }
    
    print(){
        console.log(this.name+" "+this.surname);
    }
}

/*
 Subclasses are declared with the class keyword, followed by an identifier, and then the extends keyword, followed by an arbitrary expression. This will generally just be an identifier, but could, in theory, be a function.
 If your derived class needs to refer to the class it extends, it can do so with the super keyword.
 A derived class can't contain an empty constructor. Even if all the constructor does is call super(), you'll still have to do so explicitly. It can, however, contain no constructor.
 You must call super in the constructor of a derived class before you use this.
 */
class SecondPerson extends Person{

    constructor(name,surname){
        super(name,surname);
    }

    print(){
        super.print();
        console.log("Full name "+this.name+this.surname);
    }
}

const SP = new SecondPerson("Udit","Kumawat");

SP.print();