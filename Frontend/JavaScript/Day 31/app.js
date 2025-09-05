var btn1 = document.querySelector('.btn1');
var btn2 = document.querySelector('.btn2');


// btn.addEventListener('click', function(){
//     location.href = 'https://chatgpt.com/';
// })



// var a = location.href
// console.log(a);

btn1.addEventListener('click',function(){
    history.back();
    console.log("Back ward button clicked");
    
})
btn2.addEventListener('click',function(){
    history.forward();
    console.log("Forward button clicked");
})


// dlete data from localStorage
localStorage.clear();


// set data on localStorage
localStorage.setItem('user', "manish");
localStorage.setItem('age', '21');


// data fetch from localStorage
var user = localStorage.getItem('user');
console.log(user);



// delete particular data from localStorage
localStorage.removeItem('age')



var user = [
    {
        userName:"manish",
        age:21,
        location:'bhopal'
    },
    {
        userName:"harshBhaiya",
        age:24,
        location:'bhopal'
    },
    {
        userName:"sarthak",
        age:24,
        location:'bombay'
    }
]


// object to string
var newUser = JSON.stringify(user);
localStorage.setItem('user', newUser)


// Convert string to object
console.log(JSON.parse(newUser));




// Add class name
var div = document.querySelector('div');

div.classList.add('circle');

div.classList.remove('circle')