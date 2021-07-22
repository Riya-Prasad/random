

gsap.to('.vid', {
    scrollTrigger: {
        trigger: ".main", 
        start: "top top",
        scrub:2,   //it controls animation speed of this thing
        pin: ".main"    //it stops the div on a specific div/element
    },

    width: "100%"  //width should get changed to full width
    // ease: "Expo.easeInOut"
})


gsap.to('#one', {
    scrollTrigger: {
        trigger: ".main", 
        start: "top top",
        scrub: 2.5
    },
    left: '-600px', 
    opacity:0
})



gsap.to('#images1', {
    scrollTrigger: {
        trigger: ".main", 
        start: "top top",
        scrub: 2.5
    },
    left: '-300px', 
    opacity:0
})



gsap.to('#six', {
    scrollTrigger: {
        trigger: ".main", 
        start: "top top",
        scrub: 2.5
    },
    right: '-600px', 
    opacity:0
})



gsap.to('#images2', {
    scrollTrigger: {
        trigger: ".main", 
        start: "top top",
        scrub: 2.5
    },
    right: '-300px', 
    opacity:0
})








