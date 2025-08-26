// Question -> 1

let age = 20;

if (age < 18) {
    console.log('You are minor');
    
}else if(age > 18 && age < 60){
    console.log('You are Adult');
    
}else {
    console.log('You are senior citizen');
    
}

// Question -> 2

let a = Number(prompt('Enter value of ', a))
let b = Number(prompt('Enter value of ', b))

if ((a + b) % 2 == 0){
    console.log("Even");
    
}else {
    console.log("Odd");
}

// Question -> 3

let ch = prompt('Enter chatracter')
if (ch >= 'a' && ch <= 'z') {
    console.log("LowerCase");
    
}else if (c >= 'A' && ch <= 'Z') {
    console.log("UpperCase");
    
}else {
    console.log("Not a Charcter");
    
}


// Question -> 4
let num1 = 28;
let num2 = 22;
let num3 = 53453;

if (num1 > num2 && num1 > num3){
    console.log(num1 , "is Graeter");
    
}else if(num2 > num1 && num2 > num3) {
    console.log(num2 , "is Greater");
    
}else {
    console.log(num3 , "is Greater");
    
}


// Question -> 5
let year = Number(prompt("Enter year: "))

if (year % 400 == 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("Leap Year");
}else {
    console.log("Not a Leap Year");
}

// Question -> 6

let n1 = Number(prompt("Enter number"))
let n2 = Number(prompt("Enter number2"))

n1 + n2
n1 - n2
n1 * n2
n1 / n2