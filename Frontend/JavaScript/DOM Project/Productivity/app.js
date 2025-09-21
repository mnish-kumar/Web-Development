function openFeature() {
  var allElem = document.querySelectorAll(".elem");
  var fullElemPage = document.querySelectorAll(".fullElem");
  var fullElemPageBackButton = document.querySelectorAll(".fullElem .back");

  allElem.forEach((elem) => {
    elem.addEventListener("click", function () {
      document.querySelectorAll(".fullElem")[elem.id].style.display = "block";
    });
  });

  fullElemPageBackButton.forEach(function (back) {
    back.addEventListener("click", function () {
      fullElemPage[back.id].style.display = "none";
    });
  });
}
openFeature();



let form = document.querySelector(".addTask form");
let input = document.querySelector(".addTask form #text-input");
let detailsInput = document.querySelector(".addTask form textarea");
let checkboxInput = document.querySelector(".addTask form #check");

let currentTask = [
//   {
//     task: "Mandir Jao",
//     details: "Puja Karne",
//     imp: true,
//   },
];

if(localStorage.getItem("currentTask")){
  currentTask = JSON.parse(localStorage.getItem("currentTask"));
}

function renderTask(){
  var allTask = document.querySelector(".allTask");
  let sum = "";

    currentTask.forEach((elem, id) => {
    sum += `
          <div class="task">
              <div class="details">
                <h5>${elem.task} <span class= ${elem.imp}>imp</span></h5>
                 <p>${elem.details}</p>
              </div>
              <button id = ${id}>Mark as complete</button>
          </div>
        `;
    });
    allTask.innerHTML = sum;

    var markBtn = document.querySelectorAll(".allTask button")
    markBtn.forEach(function(btn){
    btn.addEventListener('click', function(){
        currentTask.splice(btn.id, 1);
        localStorage.setItem("currentTask", JSON.stringify(currentTask));
        renderTask();
    })
  })
}
renderTask();



form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  currentTask.push({task:input.value, 
                    details:detailsInput.value, 
                    imp:checkboxInput.checked
                });


  localStorage.setItem("currentTask", JSON.stringify(currentTask));              
  input.value = "";  
  detailsInput.value ="";
  checkboxInput.checked = false;

  renderTask();
});




