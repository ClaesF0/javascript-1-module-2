console.log("hei")

const formMessageContainer = document.querySelector("textarea");

const charsCount = document.querySelector(".character-count span");

//onkeyup

formMessageContainer.onkeyup = function (event){
    console.log(event);
    console.log("the key pressed is " + event.key); // i can know the key
    console.log("value: ", event.target.value);
const numberOfCharsEntered = event.target.value.length;
console.log("numberOfCharsEntered: ", numberOfCharsEntered)
charsCount.innerHTML = numberOfCharsEntered;
//enable the button if the char number is 5 or more
const formSubmitButton = document.querySelector("button[type='submit']");
//tungvint000y
if(numberOfCharsEntered >= 5){
    formSubmitButton.disabled = false;
} else {
    formSubmitButton.disabled = true;
}
//enklere kode som gjør samme jobb
formSubmitButton.disabled = numberOfCharsEntered < 5;
}
