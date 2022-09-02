// Variables for the card number manipulation
let cardNumber = document.getElementsByClassName("cardNumber")[0];
let cardNum = document.getElementById("cardNum");
let cardNumberInput = document.getElementById("cardNumberInput");
const submit_btn = document.getElementById("btn");

// let joy=dummyTxt.match(/.{1,4}/g);

// function to take card number values from the input and print on the card
cardNumberInput.oninput = function() {
    cardNum.textContent = cardNumberInput.value;
    cardNum.textContent = (cardNumberInput.value.match(/.{1,4}/g)).join(' ');
    
    
    // i = 4;
    // while (i <= 19) {
    //     cardNumberInput.value = "x"
    //     i += 4;
    // } 
    // console.log(cardNumberInput.value.length)
}
let newCardNumberInput = []



// method to redirect user after WordPress contact form 7 is submited using the addeventlistener function  is "wpcf7mailsent"


submit_btn.addEventListener("submit", (e) => {
    newCardNumberInput = newCardNumberInput.push(cardNumberInput.value);
    
    // let numCheck = /[a-z]/gi;
    // if (cardNumberInput.value.test(numCheck) = true) {
    //     console.log("Ensure to not use any letters moving foward")
    // } else {
    //     console.log("Input a Number")
    //     e.preventDefault()
    // }
    
})

// let dummyTxt='1234567890123456';

// let joy=dummyTxt.match(/.{1,4}/g);
// console.log(joy.join(' '));

// variables for the card name manipulation
const cardholderNameInput = document.getElementById("cardName")
const cardholderName = document.getElementById("cardholdername")


// function to take card name values from the input and print on the card
cardholderNameInput.oninput = function () {
    cardholderName.textContent = cardholderNameInput.value.toUpperCase();
}

//variables for the date section and cvv
const mm = document.getElementById("mm")
const yy = document.getElementById("yy")
const mmInput = document.getElementById("month")
const yyInput =  document.getElementById("year")
const cvc = document.getElementById("cvc")
const cvcInput = document.getElementById("cvcInput")

mmInput.oninput = function () {
    mm.textContent = mmInput.value
}
yyInput.oninput = function () {
    yy.textContent = yyInput.value
}
cvcInput.oninput = function () {
    cvc.textContent = cvcInput.value
}
// let N = 123;
// function solution(N) {
//     console.log(N)
// }

// let A = 483;
// let binaryA;
// // console.log(A.toString(2))
// binaryA = A.toString(2);
// binaryA = binaryA.split("")
// console.log(binaryA);