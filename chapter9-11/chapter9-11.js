let city = prompt("Enter your City name")

let city1 = "karachi"

if(city === city1){
    alert("City of Lights")
}; //1




let gender = prompt("enter your gender");

if(gender === "male"){
    alert("Good Morning Sir")
}

if(gender === "female"){
    alert("Good Morning ma'am")
} //2

let color = prompt("Enter traffic signal color:").toLowerCase();

if (color === "red") {
    alert("Must Stop");
} else if (color === "yellow") {
    alert("Ready to move");
} else if (color === "green") {
    alert("Move now");
} else {
    alert("Invalid color entered");
}

let remainingFuelInCar = Number(prompt("remaining fuel in car"))

if(remainingFuelInCar <= 0.25){
    alert("Please refill the fuel in your car")
} else{
    alert("Your fuel level is fine. No need to refill now")
}

// Step 1: Secret number store karo (1-10 ke beech)
let secretNumber = 7; // ya random number bhi use kar sakte ho

// Step 2: User se guess lo
let userGuess = Number(prompt("Guess the secret number (1-10):"));

// Step 3: Check karo guess
if (userGuess === secretNumber) {
    // Exact match
    alert("Bingo! Correct answer");
} else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
    // Close enough ±1
    alert("Close enough to the correct answer");
} else {
    // Galat guess
    alert("Sorry, wrong guess");
}

// ============================
// 8. Divisible by 3
// ============================
let num = Number(prompt("8. Enter a number to check if divisible by 3:"));
if (num % 3 === 0) {
    alert(num + " is divisible by 3");
} else {
    alert(num + " is not divisible by 3");
}

// ============================
// 9. Even or Odd
// ============================
let evenOdd = Number(prompt("9. Enter a number to check if it is even or odd:"));
if (evenOdd % 2 === 0) {
    alert(evenOdd + " is Even");
} else {
    alert(evenOdd + " is Odd");
}

// ============================
// 10. Temperature check
// ============================
let temp = Number(prompt("10. Enter temperature in Celsius:"));

if (temp > 40) {
    alert("It is too hot outside.");
} else if (temp > 30) {
    alert("The Weather today is Normal.");
} else if (temp > 20) {
    alert("Today's Weather is cool.");
} else if (temp > 10) {
    alert("OMG! Today's weather is so Cool.");
} else {
    alert("It's very cold today!");
}

// ============================
// 11. Simple Calculator
// ============================
let firstNum = Number(prompt("11. Enter the first number:"));
let secondNum = Number(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /, %):");

let result;
if (operation === "+") {
    result = firstNum + secondNum;
} else if (operation === "-") {
    result = firstNum - secondNum;
} else if (operation === "*") {
    result = firstNum * secondNum;
} else if (operation === "/") {
    result = firstNum / secondNum;
} else if (operation === "%") {
    result = firstNum % secondNum;
} else {
    result = "Invalid operation";
}

alert("Result: " + result);
