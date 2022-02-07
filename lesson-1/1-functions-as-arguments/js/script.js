// These are often called callbacks. It is very common
// to pass functions as arguments to other ***
// functions and have the receiving function execute them.

/*
IIFE 

Instantly Invoked Function Expression

Function calls 
*/



// a. call 

function showMeMessage(){
    console.log("Hello1")
}

showMeMessage();

(function doSomething() {
    console.log("Hello2")
})();
//parantes foran og bak



const doSomething = function (){
    //do some stuff
    console.log("hello i am anonymous function")
}

doSomething();



//HOISTING          MÅ FORSTÅS BEDRE
/*   */ 


//Callback function
/*
function logTheArgument(someFunction) {
    console.log(someFunction);
}

logTheArgument(function)*/

/*
function logSomething (someArgument) {
    console.log(typeOf someArgument);
}
logSomething("Hesham");*/