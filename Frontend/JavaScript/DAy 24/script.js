// // cbs -> call back function

// function abcd(val){
//     val();
// }

// abcd(function() {})   // -> cbs here


// // hofs
// function solve(){
//     return function(){

//     }
// }

// solve()


// // closures
// function helper(){
//     let a =10;
//     return function(){
//         console.log(a);
//     }
// }
// helper();




// // 1-> Question
// function solve(ab){
//     setTimeout(ab , 3000)
    
// }

// solve(function() {
//     console.log("hey");
// })




// 2 -> Question create map function your own

var arr = [1, 2, 3, 4, 5];
// ek aisa function likho jo ek function return kare
function map(arr , fun){
    var newArr = [];

    for(let i =0; i < arr.length; i++){
        // newArr[i] = (fun(arr[i]));
        newArr.push(fun(arr[i]));
    }

    return newArr;
}

// call the function
var ans = map(arr , function(value){
    return value + 2; // jo bhi value aayega usme 3 add akr do
})






// 3. Write a function that uses closures to create a counter.
function counter(){
    let count = 0;

    return function(){
       count++;
       console.log(count);
    }
}

var makeCount = counter();
makeCount();
makeCount()






// 4. Implement a function that limits how many times another function can be called (Closure + HOF).

function functionLimit(fn , limit){

    let totalCount = 0;

    return function(){
        if(totalCount < limit){
            totalCount++;
            fn();
        }
    }
}

var storeLimit = functionLimit(function (){
    console.log("hey");
    
} , 4)  // 4 times se jyada function call n kar skte h

storeLimit();
storeLimit();
storeLimit();
storeLimit();