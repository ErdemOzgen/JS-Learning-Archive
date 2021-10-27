//The simplest kind of statement is an expression with a semicolon after it. This is a program:
1;
!false;
//To catch and hold values, JavaScript provides a thing called a binding, or variable:
let caught = 5 * 5;

let ten = 10;
console.log(ten * ten);
// → 100

let mood = "light";
console.log(mood);
// → light
mood = "dark";
console.log(mood);
// → dark



let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// → 105

let one = 1, two = 2;
console.log(one + two);
// → 3


var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);
// → Hello Ayda


// Reserved Words
/**
 * break case catch class const continue debugger default
delete do else enum export extends false finally for
function if implements import interface in instanceof let
new package private protected public return static super
switch this throw true try typeof var void while with yield
 * 
 * 
 */


// open in browser console ==> prompt("Enter passcode");


let x = 30;
console.log("the value of x is", x);
// → the value of x is 30



console.log(Math.max(2, 4));
// → 4

/*
let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " +
            theNumber * theNumber);

*/


let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
}


let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
} else {
  console.log("Hey. Why didn't you give me a number?");
}


let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
// → 0
// → 2
//   … etcetera


let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
// → 1024


let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);


if (false != true) {
    console.log("That makes sense.");
    if (1 < 2) {
      console.log("No surprise there.");
    }
  }

  for (let number = 0; number <= 12; number = number + 2) {
    console.log(number);
  }
  // → 0
  // → 2
  //   … etcetera


  let result = 1;
  for (let counter = 0; counter < 10; counter = counter + 1) {
    result = result * 2;
  }
  console.log(result);
  // → 1024

  for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
      console.log(current);
      break;
    }
  }
  // → 21



  switch (prompt("What is the weather like?")) {
    case "rainy":
      console.log("Remember to bring an umbrella.");
      break;
    case "sunny":
      console.log("Dress lightly.");
    case "cloudy":
      console.log("Go outside.");
      break;
    default:
      console.log("Unknown weather type!");
      break;
  }