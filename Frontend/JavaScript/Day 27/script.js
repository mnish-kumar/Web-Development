var num = Math.random()*10;
console.log("Random Value:" , num);

var num2 = Math.floor(num);
console.log("Remove Decimal:", num2);



var a = 10;
console.log("Hello",a);
console.log("Hello "+ a);
console.log(`Hello ${a + 10}`);


// 1-> Project Change mirror color each click

var btn = document.querySelector('button');
var box = document.querySelector('.box');

btn.addEventListener('click', function() {
    var c1 = Math.floor(Math.random() * 256);
    var c2 = Math.floor(Math.random() * 256);
    var c3 = Math.floor(Math.random() * 256);

    box.style.backgroundColor = `rgb(${c1} ,${c2}, ${c3})`;
    
})






// 2 -> Project
var arr = ['RCB', 'CSK', 'KKR', 'MI', 'LSG', 'GT', 'SRH', 'DC', 'PBKS', 'RR'];
console.log(arr[Math.floor(Math.random() * arr.length)]);






