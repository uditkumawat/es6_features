"use strict";

class ListComponent{
    
    private _things : Array<ListItem>;
    
    constructor(){
        this._things = [];
    }

    get things() : Array<ListItem> {
        return this._things;
    }

    get length() : number{
        return this._things.length;
    }

    add (item:ListItem,password:string) : boolean{

        if(this.validate(password)){
            this._things.push(item);
            return true;
        }
        else{
            return false;
        }
    }

    private validate(password : string) : boolean{

        if(password === '12345'){
            return true;
        }
        else{
            return false;
        }
    }
}

class ListItem{
    
    private _name : string;
    
    constructor(name){
        this._name = name;
    }

    get name() : string{
        return this._name;
    }
}

const PASS = '12345';

const item = new ListItem('Thing to Do');
const list_one = new ListComponent();
const list_two = new ListComponent();

console.log(list_one.add(item, PASS)); // true
console.log(list_one.length); // 1

console.log(list_two.add(item, 'WRONG password')); // false
console.log(list_two.length); // 0

// console.log(list_one.validate('12345')); // Compiler error

class CompletedListItem extends ListItem {

    completed : boolean;

    constructor (name : string) {
        super(name);
        this.completed = true;
    }

}