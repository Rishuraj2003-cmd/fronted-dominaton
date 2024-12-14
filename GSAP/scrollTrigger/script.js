gsap.to("#pg2 img",{
    width:"100%",
    scrollTrigger:{
    trigger:"#pg2",
    scroller:"body",
    markers:true,
    start:"top 0",
    end:"top -100%",
    scrub:2,
    pin:true,
    }
})
gsap.to("#pg3 h2",{
    transform:"translateX(-125%)",
    scrollTrigger:{
        trigger:"#pg3",
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true,
    }
})