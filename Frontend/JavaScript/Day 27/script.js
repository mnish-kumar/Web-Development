// var num = Math.random()*10;
// console.log("Random Value:" , num);

// var num2 = Math.floor(num);
// console.log("Remove Decimal:", num2);



// var a = 10;
// console.log("Hello",a);
// console.log("Hello "+ a);
// console.log(`Hello ${a + 10}`);


// // 1-> Project Change mirror color each click

// var btn = document.querySelector('button');
// var box = document.querySelector('.box');

// btn.addEventListener('click', function() {
//     var c1 = Math.floor(Math.random() * 256);
//     var c2 = Math.floor(Math.random() * 256);
//     var c3 = Math.floor(Math.random() * 256);

//     box.style.backgroundColor = `rgb(${c1} ,${c2}, ${c3})`;
    
// })






// 2 -> Project
// var arr = ['RCB', 'CSK', 'KKR', 'MI', 'LSG', 'GT', 'SRH', 'DC', 'PBKS', 'RR'];
// console.log(arr[Math.floor(Math.random() * arr.length)]);

var arr = [
    {
        team:"RCB",
        Pcolor:"Red",
        Scolor:"Green"
    },
    {
        team:"CSK",
        Pcolor:"yellow",
        Scolor:"Green"
    },
    {
        team:"RR",
        Pcolor:"hotpink",
        Scolor:"Green"
    },
    {
        team:"LSG",
        Pcolor:"blue",
        Scolor:"Green"
    },
    {
        team:"KKR",
        Pcolor:"darkblue",
        Scolor:"Green"
    },
    {
        team:"MI",
        Pcolor:"navyblue",
        Scolor:"Green"
    },
    {
        team:"PBKS",
        Pcolor:"orange",
        Scolor:"Green"
    },
    {
        team:"GT",
        Pcolor:"brown",
        Scolor:"Green"
    },
];


var btn = document.querySelector('button');
var h1 = document.querySelector('h1');

btn.addEventListener('click', function() {
    var a = Math.floor(Math.random() * arr.length);
    var winner = arr[a];

    h1.innerHTML = winner.team;
    h1.style.backgroundColor = winner.Pcolor;
})

