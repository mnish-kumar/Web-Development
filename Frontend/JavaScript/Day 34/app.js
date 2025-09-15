// fetch
// github api


var btn = document.querySelector('button');
btn.addEventListener('click', function(){
        fetch("https://api.github.com/users/async")
        .then((raw => raw.json())).then(data=>{
        console.log(data);
    })
})

