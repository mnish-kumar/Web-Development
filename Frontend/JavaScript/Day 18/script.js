// rest parameters

// function array(a,b,c,d,e,...nothing){
//     console.log(a,b,c,d,e,nothing);
    
// }

// array(1,2,3,4,5,6,7,8);





// Hoisting
// let a;
// console.log(a);
// a = 5;

// solve()

// function solve(){
//     console.log("Hey mai hoisting me hu");
    
// }





// IIFE -> immediate function call
// (function solve(){
//     console.log("Heyhehehe");
    
// })();



// hofs > higher order function
// function solve() {
//     return function (){
//         console.log("Mai hofs me return ho rha hu");
//     }
// }
// solve()();




// cb function

function solve(val){        // this is higher order function

}


solve(function(){       // jo parameter function me pass ho raha hai-> call back function
                        // function call karte time parameter ke jagah function bna diya use call back hi kahte hai

})



// Closure
function abcd(){
    let a = 10;
    return function (){
        console.log(a);
    }
}

let ans = abcd();
ans();
