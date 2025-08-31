// getAttribute & setAttribute



// var a = document.querySelector('h1');
// console.log(a);

// var attt = a.getAttribute('id');
// console.log(attt);

// a.setAttribute('id' , 'herione'); // -> change h1 id name hero -> herione





// getAttribute & setAttribute on image

// var img1 = document.querySelector('.img1');
// var img2 = document.querySelector('.img2');

// var btn = document.querySelector('button');

// // console.log(img2.getAttribute('class'));


// btn.addEventListener('click', function(){
//     var a = img1.getAttribute('src');
//     var b = img2.getAttribute('src');

//     img1.setAttribute('src', b);
//     img2.setAttribute('src', a)
// })





// Create an Element

// var img = document.createElement('img');
// img.setAttribute('src', 'https://plus.unsplash.com/premium_photo-1756131939424-60108e56aa9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D')
// img.style.height = '200px'
// document.body.append(img)


var btn = document.querySelector('button');

btn.addEventListener('click', function(){
    var img = document.createElement('img');
    img.setAttribute('src', './1.png');
    img.setAttribute('class', 'image');
    document.body.append(img);
    
})

