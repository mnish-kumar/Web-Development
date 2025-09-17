// fetch
// github api


// var btn = document.querySelector('button');
// btn.addEventListener('click', function(){
//         fetch("https://api.github.com/users/async")
//         .then((raw => raw.json())).then(data=>{
//         console.log(data);
//     })
// })



let arr = [1,2,3,4,5];

let updatedArr = arr.filter(function(n){
    if (n > 2){
        return n;
    }
})
console.log(updatedArr);

