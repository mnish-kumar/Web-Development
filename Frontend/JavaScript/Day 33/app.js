//1: Simulate food delivery
// After 2 second resolve pizza delivered show

// function orderFood(){
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             let chance = Math.random() < 0.6;

//             if (chance)  res();
//             else  rej();
            
//         }, 2000)
//     });
// }

// orderFood()
// .then(function(){
//     console.log("Pizza Delivery!");
// })
// .catch(function(){
//     console.log("Not Delivered.");
// })






// 2: Chained Promise: User Post Commit
function  getUser(){
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res({id:1, name:"manish"});
        }, 1000);
    })
}

function getPost(userId){
    return new Promise((res , rej)=>{
        setTimeout(function(){
            res(["title1", "title2"]);
        }, 1000)
    })
}

function getComments(PostId){
    return new Promise((res , rej)=>{
        setTimeout(function(){
            res(["Nice Post", "Great dude", "Amazing content"]);
        }, 1000)
    })
}

getUser().then(function(data){
    console.log(data);
    return getPost(data.id);
})
.then(function(titles){
    console.log(titles);
    return getComments("njgjjhiuhi");
})
.then(function(cmts){
    console.log(cmts);
})
.finally(function(){
    console.log("All data fetched");
    
})