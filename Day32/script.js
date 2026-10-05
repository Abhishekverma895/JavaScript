let a = 12;
let b = 80;
if(a<12, b>90){
    console.log("hi")
}
else{
    console.log("bye")
}

if(12){
    console.log("hi")
}
else{
    console.log("bye")
}

let name = prompt("Enter your name:");
let password = prompt("Enter your password:");
let currentPassword = "1234";

if (name === "Abhi" && password === currentPassword) {
    console.log("login");
} else {
    console.log("not found");
}

if(9>10){
    console.log("if chala hai")
}
else if(11>10){
    console.log("else if chala")
}
else if("else if 2 chala"){
}
else{
    console.log("else chalaga")
}

switch(2) {
    case 1:
        console.log("hi")
        break;

    case 2:
        console.log("hii")
        break;

    case 3:
        console.log("hiii")
        break;

    case 4:
        console.log("hiiii")
        break;
}

for (let i = 1; i <= 10; i++) {
    console.log(" 2 x " + i + " = " + (2 * i));
}

for(let i = 1; i < 6; i++){
    console.log("Abhi");
}

for(let i = 11; i < 16; i++){
    console.log(i);
}

for(let i = 30; i > 2; i--)
    if(i === 5 || i === 7){}
else{
     console.log(i);
}

for( let i = 1; i < 21; i++){
    if(i%2 === 0 ){
        console.log(i);
    }
}

for( let i = 1; i < 21; i++){
    if(i%2 !== 0 ){
        console.log(i);
    }
}

for (let i = 1; i < 21; i++) {

    if (i % 2 !== 0) {
        console.log(i);
    }

}

for( let i = 11; i < 21; i+=2){
    if(i%2 === 0 ){
        console.log(i);
    }
}

for(let i = 1; i < 6; i++){
        console.log("yes");
    }

for(let i = 1; i < 20; i++){
    if(i%2 === 0)
        console.log(`${i}  Even`);
    else(i%2 !== 0)
        console.log(`${i} odd`);
    
}

let num = +prompt("Abhi number do")
if( num === 12){
    console.log("its 12")
}
else{
    console.log("not 12")
}

let attempt = 0;
let sahipass = "Abhi"

let userpass = prompt("enter your passwordsss");
attempt++;

while(attempt < 3 && sahipass !== userpass){
    userpass = prompt("enter your passeordss");
    attempt++;
}

if (attempt === 3 && sahipass !== userpass){
    console.log("Account locked")
} else{
    console.log("Done");
}

let word = prompt("word batao bhai");
let counter = 0;

while(word !== "Abhi"){
    if(word = "Abhishek") counter++;
    word = prompt("word batao bhai");
}

console.log(`Total time count : ${counter}`);


for( let i=1; i<51; i++){
    if(i%7 === 0){
        console.log(`Table- ${i}`);
    }
}

let sum = 0;
for(let i = 0; i<99; i++){
    if(i%2 !== 0){
        sum = sum + i;
        console.log(`Total Sum - ${sum}`);
    }
}

// let num1 = Number(prompt("First number batao"));
// let operator = prompt("Operator batao (+, -, *, /)");
// let num2 = Number(prompt("Second number batao"));

// let result;

// if (operator === "+") {
//     result = num1 + num2;
// }
// else if (operator === "-") {
//     result = num1 - num2;
// }
// else if (operator === "*") {
//     result = num1 * num2;
// }
// else if (operator === "/") {
//     result = num1 / num2;
// }
// else {
//     result = "Invalid operator";
// }

// console.log(`Result = ${result}`);

// let num1 = Number(prompt("First number batao"));
// let operator = prompt("Operator batao (+, -, *, /)");
// let num2 = Number(prompt("Second number batao"));

// let result;

// if (operator === "+") {
//     result = num1 + num2;
// }
// else if (operator === "-") {
//     result = num1 - num2;
// }
// else if (operator === "*") {
//     result = num1 * num2;
// }
// else if (operator === "/") {
//     result = num1 / num2;
// }
// else {
//     result = "Invalid operator";
// }

// console.log(`Result = ${result}`);

// while (true) {

//     let num1 = Number(prompt("First number batao"));
//     let operator = prompt("Operator batao (+, -, *, /) ya exit likho");
    
//     if (operator === "exit") {
//         break;
//     }

//     let num2 = Number(prompt("Second number batao"));

//     let result;

//     if (operator === "+") {
//         result = num1 + num2;
//     }
//     else if (operator === "-") {
//         result = num1 - num2;
//     }
//     else if (operator === "*") {
//         result = num1 * num2;
//     }
//     else if (operator === "/") {
//         result = num1 / num2;
//     }
//     else {
//         console.log("Invalid operator");
//         continue;
//     }

//     console.log(`Result = ${result}`);
// }

let nums = +prompt("Number Batao");
while(nums%2 !== 0){
    nums = +prompt("Number Batao");
if(nums === 0){
    console.log("Done");
}
}

let start = +prompt("Start")
let end = +prompt("end")

for(let i= start; i <= end; i++){
    console.log(i);
}

let Abhicounter = 0;
for(let i = 0; i < 21; i++){
    if(Abhicounter === 3) break;
    if(i%2 !== 0){
        console.log(i);
         counter++;
    }
       
}