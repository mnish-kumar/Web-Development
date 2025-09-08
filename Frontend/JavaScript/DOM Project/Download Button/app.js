var btn = document.querySelector('button');

var load = document.querySelector('#percent');
var download = document.querySelector('.download');
var read = document.querySelector('#read');

var grow = 0;
let clear;

btn.addEventListener('click', function(){
    setInterval(function(){
        if (grow > 100){
            clearInterval(clear);
            btn.innerHTML = 'Downloaded'
        }else {
            load.innerHTML = grow++ + "%";
            read.style.width = grow + "%"
        }
        
    },100)
})