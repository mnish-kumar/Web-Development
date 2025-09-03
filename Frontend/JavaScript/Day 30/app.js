// var arr = [
//     {
//         user: "John Doe",
//         age:21,
//         married:false
//     },
//     {
//         user: "Mark lee",
//         age: 22,
//         married: false
//     },
//     {
//         user: "Jane Smith",
//         age: 28,
//         married: false
//     }
// ]

// var sum = 0, people = 0;
// arr.forEach(function(item) {
//     sum += item.age;
//     people++;
// });

// console.log(people,'People age sum is', sum);



var arr = [
    {
        username: "JohnDoe",
        image:'https://plus.unsplash.com/premium_photo-1664461664915-c58790ebebff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
        married: true,
        isStatus:  'Stranger',
        age: 30
    },
    {
        username: "MarkLee",
        image:'https://images.unsplash.com/photo-1756640837325-b8df8e2a02fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D',
        married: false,
        isStatus:  'Stranger',
        age: 35
    },
    {
        username:"Harsh",
        image: 'https://images.unsplash.com/photo-1753625606793-47749a65e80f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D',
        married: false,
        isStatus:  'Stranger',
        age: 20
    }
]

// Event Bubling


var body = document.querySelector('body');

function heroFunction(){
    var sum = ''

    arr.forEach(function(item,idx) {
        sum += `<div class="card">
            <img src="${item.image}" alt="">
            <h2>${item.username}</h2>
            <p>Age: ${item.age}</p>
            <p>Married: ${item.married}</p>
            <h5>${item.isStatus}</h5>
            <button id=${idx}>${item.isStatus == 'Stranger' ? 'Add Friend' : 'Remove Friend'}</button>
        </div>`;
    });
    body.innerHTML = sum;
}
heroFunction();





body.addEventListener('click',function(dets){
    var gold = arr[dets.target.id];
    
    if(gold.isStatus == 'Stranger'){
        gold.isStatus = 'Friends';
    }else{
        gold.isStatus = 'Stranger';
    }
    // Update the UI
    heroFunction();
})