var main = document.querySelector(".main");
var cursor = document.querySelector(".cursor");

cursor.style.display = "none";

main.addEventListener("mouseenter", function(dets){
  cursor.style.display = "block";
    cursor.style.left = dets.pageX + "px";
    cursor.style.top = dets.pageY + "px";
})

main.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

window.addEventListener("mouseout", function (e) {
  if (e.clientY <= 0) {
    // Agar mouse upar gaya
    cursor.style.display = "none";
  }
});

window.addEventListener("mouseover", function (e) {
  cursor.style.display = "block";
});


var nav = document.querySelector(".nav");

var lastScroll = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScroll < window.scrollY) {
    nav.style.top = "-10vh";
  } else {
    nav.style.top = "0";
  }
  lastScroll = window.scrollY;
});