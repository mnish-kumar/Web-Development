function openFeature(){
    var allElem =  document.querySelectorAll(".elem");
    var fullElemPage = document.querySelectorAll(".fullElem");
    var fullElemPageBackButton = document.querySelectorAll(".fullElem .back")
    
    allElem.forEach((elem)=> {
        elem.addEventListener("click", function(){
            document.querySelectorAll(".fullElem")[elem.id].style.display = "block";
        })
    });
    
    
    fullElemPageBackButton.forEach(function(back){
        back.addEventListener('click', function(){
            fullElemPage[back.id].style.display = "none";
        })
    })
}
openFeature();


let form = document.querySelector(".addTask form");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("hello");
    
})


