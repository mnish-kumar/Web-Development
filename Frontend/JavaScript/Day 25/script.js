// 1. Create a function that takes a callback and executes it after every `n` seconds indefinitely.
function AgainAndAgain(fn , time){
    setInterval(fn , time);
}

AgainAndAgain(function(){
    console.log("Hello");
    
} , 2000)




// 2. Implement a function that returns a function with a preset greeting (Closure).
function greetingFunc (greeting){
    return function (name){
        console.log(`${greeting} ${name}`);
    }
}

var ans = greetingFunc("Hello");
ans("Manish")
ans("Priyanka")

var spanishGreter = greetingFunc("Hola !")
spanishGreter("Manku")




// 3. Implement a function that takes a callback and only executes it once (HOF + Closure).
function oneTimeRun(callback){
    let itsEsecute = false;

    return function(){
        if(!itsEsecute){
            itsEsecute = true;
            callback();
        }else {
            console.error("Already executed.");
            
        }
    }
}

var store = oneTimeRun(function(){
    console.log("Some code which should be executed.");
})
store();
store()





// 4. Implement a function that throttles another function (HOF + Closures).
function thorat(fnc , delay){
    let lastCall = 0;

    return function(){
        let current = Date.now();
        if(current - lastCall >= delay){
            lastCall = current;
            fnc();
        }
    }
}


var newFnc = thorat(function(){
    console.log("We will run in every 2 seconds.");
    
} , 2000);
newFnc();