var btn = document.querySelector('button');

var img1 = document.querySelector('.img1');
var img2 = document.querySelector('.img2');

btn.addEventListener('click', function(){
 
    var a = img1.getAttribute('src');
    var b = img2.getAttribute('src');

    img1.setAttribute('src', b);
    img2.setAttribute('src', a)
})