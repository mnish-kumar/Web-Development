var btn = document.querySelector('button');
var h1 = document.querySelector('h1');
var img = document.querySelector('img');


var flag = 0;

btn.addEventListener('click', function(){
    if (flag == 0){
        h1.innerHTML = 'Friend`s';
        btn.style.backgroundColor = 'green'
        img.src = 'https://images.unsplash.com/photo-1648065234197-14dfd15424a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHxtb2RlbHN8ZW58MHx8MHx8fDA%3D'
        btn.innerHTML = 'Remove Friend'

        flag = 1;
    }else{
        flag = 0;
        h1.innerHTML = 'Stranger';
        btn.style.backgroundColor = 'red'
        btn.innerHTML = 'Add Friend'
        img.src = 'https://images.unsplash.com/photo-1620774200615-768edf9afb4a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxtb2RlbHN8ZW58MHx8MHx8fDA%3D'
    }
})