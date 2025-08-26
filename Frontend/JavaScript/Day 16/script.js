
// let s = "manish";
// console.log(s.slice(0 , 3));


// // template
// let str = `Hy my age is ${20 + 2}`

// split
let str = "my name is syam";
var ans = str.split('a');


// replace 
let m = "mivk"
let op  = m.replace('v' , 'i');




// conditional  operator

let age = 18;

if (age < 18) {
    console.log('You are not eligble for vote in India.');
}else if (age >= 18){
    console.log("yes , are eleigilbe for vote");
    
}else if (age != 18 && age < 15) {
    console.log('Your are teenager');
    
}else {
    console.log('You are baby dudh piyo !');
    
}



// Loops

// for
for (let i = 1; i <= 50; i + 5) {
    console.log('5 * ' , i , ' = ' , 5 * i);
    
}


// while
let i = 20;
while(20 < 100){
    console.log(i);
    i++;
}

// do while

let count = 0;
do{
    console.log('mai to ek baar chalunga hi');
    count++;
    
}while(count < 5)