// setTimeout(function(){
//     console.log("I am settimeout");
// }, 2000)


// var count = 0;
// var int = setInterval(() => {
//     console.log("i am interval");
//     count++;

//     if(count === 10){
//         clearInterval(int);
//     }
// }, 1000);




// -> Call Back function

function one(cb){
    console.log("Hey 1");
    cb();
}

function two(cb){
    console.log("Hey 2");
    cb();
}

function three(cb){
    console.log("Hey 3");
    cb();
}


// call back function hell
one(() => {
    two(()=>{
        three(()=>{
            console.log("All function are called.....");
            
        })
    })
});




// Promise:

// const pr = new Promise(function(resolve, rej){
//     console.log("Insta pe jao data lao");
//     console.log("Data fetch");
//     console.log("Dta collection me error");
//     console.log("Insta data...");
//     rej();
// })

// pr.then(function(){
//     console.log("resolved");
// }).catch(function(){
//     console.log("rejected");  
// })



// Call back hell make using Promise
function one1(){
   return new Promise(function(res, rej){
    console.log("Hey i am: 1");
    res();
   })
}

function two2(){
    return new Promise(function(res, rej){
    console.log("Hey i am: 2");
    res();
   })
}

function three3(){
   return new Promise(function(res, rej){
    console.log("Hey i am: 3");
    res();
   })
}

one1().then(two2).then(three3).then(function(){
    console.log("All process");
})
