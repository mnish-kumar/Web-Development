// DOM -> Document Object Model


// Pillers of DOM 
// -Selection of Element ✅✅
// -Changing in HTMl    ✅
// -Changing in CSS     ✅
// -Event Listener      ✅

// // 1.
var h = document.querySelector('h1');

// 2.
h.innerHTML = 'Vartmaan aankho ka dhoka hai'

// 3.
h.style.color = 'yellow'
h.style.backgroundColor = 'gray'

// 4.
h.addEventListener('click' , function(){
    console.log("Hey U click on h1");
})


h.addEventListener('click', function(){
    h.innerHTML = 'Hey i am changed after click'
    h.style.color ='Slateblue'
    h.style.fontFamily = 'Helvetica'
    h.style.fontSize = '4rem'
})







// // Indepth selection of Element -> Multiple elemnt select
var box = document.getElementById("box")
console.log(box);

var h2 = document.querySelectorAll('h2');
h2[0].innerHTML = "changed 1";
h2[1].innerHTML = 'changed 2';





var btn = document.querySelector('button');

btn.addEventListener('click', function(){
    box.style.backgroundColor = 'pink';

})

