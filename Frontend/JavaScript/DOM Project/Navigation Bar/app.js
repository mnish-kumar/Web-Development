var nav = document.querySelector('.container')
var lastScroll = window.scrollY;

window.addEventListener("scroll", function(){
   if (window.scrollY > lastScroll){
        nav.style.top = '-70px';
   }else{
        nav.style.top = '0';
   }
   lastScroll = window.scrollY;
})