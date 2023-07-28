var crs = document.querySelector("#cursor")
var blr = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
        crs.style.left = dets.x+"px"
        crs.style.top = dets.y+"px"
        blr.style.left = dets.x- 250 +"px"
        blr.style.top = dets.y- 250 +"px"
})


gsap.to("#nav",{
    backgroundColor: "#000",
    height:"111px",
    duration: 0.6,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers: true,
        start:"top -10%",
        end:"top -11%",
        scrub: 1

    }
})

gsap.to("#main",{
     backgroundColor: "#000",
     scrollTrigger: {
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2,


     }
        
})