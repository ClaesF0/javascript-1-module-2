// The setTimeout method is used to execute a
// function after a specified period of time.

setTimeout(function(){
console.log("Hello I am 2000 timeout")
}, 2000); //millisekunder

//1. select the class .loader
//2. setTimeout
//3.change the innerHTML of loading

const loading = document.querySelector(".loader");

setTimeout(function(){
loading.innerHTML = "Finished downloading!"
}, 5000);