var love = document.querySelector('i');

love.addEventListener('dblclick', function(){
    love.style.opacity = 0.9;

    setTimeout(function(){
        love.style.opacity = 0;
    }, 1000)

    setTimeout(function(){
        love.style.transform = 'translate(-50% , -50%) scale(0)';
    }, 2000)
})
