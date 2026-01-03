// 1

let a = 10;

alert("the value of  is : " + a);

a = ++a;

alert("the value of ++a is : " + a);
alert("now the value of is: " + a);
       
let b = a++;

alert("the vlaue of a++ is " + b);
alert("now the value of is " + a);


a = --a;
alert("the vlaue of --a is " + a);
alert("now the value of is " + a);

b = a--;
alert("the vlaue of a-- is " + b);
alert("now the value of is " + a);

//2
        
let a1 = 2;
let b1 = 1; 
let result = --a1 - --b1 + ++b1 + b1--;
alert("a1 " + a1 + "\n" + "b1 " + b1 + "\n" + "result " + result);

// 3

// Question 3
let userName = prompt("Apna naam likho:");
alert("Hello " + userName + ", welcome!");

// Question 6

// Subjects
let subject1 = prompt("First subject ka naam likho:");
let subject2 = prompt("Second subject ka naam likho:");
let subject3 = prompt("Third subject ka naam likho:");


let totatalmarks = 100;

let obtainedmarks = Number(prompt("obtainermarks"));

let percentage = (obtainedmarks / totatalmarks) * 100;

alert(
    "subject " + subject1 +
    "\n" + "totatalmarks " + totatalmarks +
    "\n" + "obtainedmarks " + obtainedmarks +
    "\n" + "percentage " + percentage + " %"

)

console.log("hello")