// karna kya hota hai
// -> classees ke andar onject baanate hai


// kyu karna hai
//  -> code readable, cleand code, esy to understand banane ke liye




// this is old function to make constructor
function Cupcake(){
    this.name = 'choclate'
    this.brand = 'choco'
    this.prize = 20
    this.rate = 5
}


let cup = new Cupcake();
console.log(cup);


// jab bhi function ko call karte waqt tumne new ka use kar liya to turant mn me ek blank object bna

// jab bhi function me this ko dekho to turant





// function Toffe(flavour, price, rate){
//     this.flavour = flavour;
//     this.price = price;
//     this.rate = rate;
// }

// let t1 = new Toffe("valina", 10, 5);
// let t2 = new Toffe("staroberry", 40, 10);
// let t3 = new Toffe("mango", 30, 8);





// Using class create object

// class Toffe {
//     constructor(){
//         this.flavour = "mango";
//         this.price = 20;
//         this.rate = 5;
//         this.origin = "India";
//         this.tag = "sweet";
//         this.category = "candy";
//         this.type = "chewy";
//         this.shape = "rectangular";
//         this.color = "various";
//         this.brand = "ToffeCo";
//         this.weight = "50g";
//     }
// }

// var tof = new Toffe();













// Prototype

// class Animal{
//     constructor(name, bread, legs, color){
//         this.name = name;
//         this.bread = bread;
//         this.legs = legs;
//         this.color = color;
//     }
// }

// Animal.prototype.bark = function(){
//     console.log("woof woof");
// }

// var animal = new Animal("dog", "mammal", 4, "brown");
// var animal2 = new Animal("cat", "mammal", 4, "white");





// function Toffee(name , price, madeIn){
//     this.name = name;
//     this.price = price;
//     this.madeIn = madeIn;

//     this.price = function(){
//         console.log(this.price);
//     }

//     this.origin = function(){
//         console.log(this.madeIn);
//     }
// }

// var toffee1 = new Toffee("mango", 20, "India");
// var toffee2 = new Toffee("choclate", 30, "USA");




// create employee function

function Employee(name, age, salary, id){
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.id = id;
}

Employee.prototype.details = function(){
    console.log(`${this.name} is my name and I am
                ${this.age} years old and my salary is
                ${this.salary} and this is my Employee id,
                ${this.id}`
            );
}

let emp1 = new Employee("John", 30, 50000, 1);

