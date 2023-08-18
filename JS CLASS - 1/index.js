
// Print or loggong on console
console.log("Hello, World");

// Declaration of variable and printing
let a = 5;

console.log(a);

let marks = 89;


// If -- else conditional statement

console.log("If -- else");

if (marks > 90) {
    console.log("A");
}
else if (marks >= 80) {
    console.log("B");
}
else if (marks >= 70) {
    console.log("C");
}
else if (marks >= 60) {
    console.log("D");
}
else if (marks >= 50) {
    console.log("E");
}

else {
    console.log("Fail");
}

// Switch case conditonal statement

console.log("Switch statement");

let num  = 10;

switch (num) {
    case 1:
        console.log("A");
        break;
    case 2:
        console.log("B");
        break;
    case 3:
        console.log("C");
        break;
    default:
        console.log("F");
        break;
}

// Loops

// 1. For loop

console.log("For Loop");

for (let index = 0; index < 5; index++) {
    console.log(index);
}

// 2. while loop

console.log("While loop");

let i = 0;
while (i <= 5) {
    console.log(i);
    i++
}

// do-while loop

console.log("Do While loop");

let jose = 0;
do {
    console.log(jose);
    jose++;
} while(jose <= 5);