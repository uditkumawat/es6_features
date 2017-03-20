"use strict";

const speakingObj = {

    words : [],

    speak (word){
        this.words.push(word);
        console.log('speakingObj says '+word+'!');
    },

    /*
     Getters can't take arguments;
     You can't have properties with the same names as your getter functions;
     You can create a getter dynamically by using Object.defineProperty(OBJECT, "property name", { get : function () { . . . } })
     */
    get called(){

        const words = this.words;

        if(!words.length)
        {
            return 'speakingObj hasn\'t spoken yet';
        }
        else{
            return words[words.length-1];
        }
    }
};




console.log(speakingObj.called);

speakingObj.speak('high');

console.log(speakingObj.called);





// // Create a new globetrotter!
// const globetrotter = {
//     // Language spoken in the country our globetrotter is currently in
//
//     // Number of countries our globetrotter has travelled to
//     let countries = 0,
//
//     // See how many countries we've travelled to
//     get countryCount () {
//         return this.countries;
//     },
//
//     // Reset current language whenever our globe trotter flies somewhere new
//     set languages (language) {
//         // Increment number of coutnries our globetrotter has travelled to
//         countries += 1;
//
//         // Reset current language
//         this.current_lang = language;
//     };
// };
//
// globetrotter.language = 'Japanese';
// globetrotter.countryCount; // 1
//
// globetrotter.language = 'Spanish';
// globetrotter.countryCount; // 2