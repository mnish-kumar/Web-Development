var tl = gsap.timeline()

tl.from("h2" , {
    y: -20,
    opacity: 0,
    duration: 1,
    dealy:0.3
})

tl.from("h4" , {
    y: -20,
    opacity: 0,
    duration: 0.7,
    stagger: 0.3
})

tl.from("h1",  {  
    opacity: 0,
    duration: 0.9,
    scale:0.2
})