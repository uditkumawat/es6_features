"use strict";

/*
? for optional property
 */
interface User{
    name : string,
    email : string,
    avatar? : Object,

    print() : void
}

class RegisteredUser implements User{

    constructor(public name: string,public email:string){
        this.name = name;
        this.email = email;
    }

    print() : void {
        console.log(this.name,this.email);
    }
}

class ImageUser implements User{

    constructor(public name:string,public email : string,public avatar : Object){
        this.name = name;
        this.email = email;
    }

    print() : void {
        console.log(this.name,this.email);
    }
    
}