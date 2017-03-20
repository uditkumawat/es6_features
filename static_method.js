"use strict";

function Food(name,protien,carbs,fat){

    Food.count+=1;

    this.name = name;
    this.protien = protien;
    this.carbs = carbs;
    this.fat = fat;
}

Food.count=0;           //static variable

Food.describe = function count(){               //static function
    console.log('You have created',Food.count,'Foods');
};

const dummy = new Food();
const dummy1 = new Food();
Food.describe();