const myDivs = document.querySelectorAll(".container > div");
console.log(myDivs);

for (let i = 0; i < myDivs.length; i++){
    console.log(myDivs[i].dataset.price);
    //onclick
    myDivs[i].onclick=function(event) {
        console.log("Price: " + event.target.dataset.price)
        console.log(this.dataset.price)
    }
}