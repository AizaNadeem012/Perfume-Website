let crsr = document.querySelector('.cursor')
let blur = document.querySelector('.cursor-blur')


document.addEventListener("mousemove", function(dets){
   crsr.style.left = dets.x+30 +"px"
   crsr.style.top = dets.y+"px"
})

document.addEventListener("mousemove", function(dets){
    blur.style.left = dets.x+"px"
    blur.style.top = dets.y+"px"
 })
 var h4all = document.querySelectorAll(".nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale =3
        crsr.style.border = "1px solid #ffd"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #88b60b"
        crsr.style.backgroundColor = "#88b60b"
    })
})



gsap.to(".nav",{
    backgroundColor :"#000",
    duration: 0.5,

    height: "110px",
    
    delay: 1,
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end:"top -11%",
        scrub: 1,
    }
})

gsap.to("#main" ,{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -80%",
        scrub: 2
    }
})
gsap.from("#about-us img ,#about-us-in",{
    y:50,
    opacity:0,
    duration: 1,
    // stagger: 0.4,
    scrollTrigger:{
        trigger: '#about-us',
        scroller: 'body',
        // markers: true,
        start: "top 60%",
        end: "top 55%",
        scrub: 1
        
    }
})
gsap.from(".card",{
   scale: 0.8,
    opacity:0,
    duration: 1,
    // stagger: 0.1,
    scrollTrigger:{
        trigger: '.card',
        scroller: 'body',
        // markers: true,
        start: "top 60%",
        end: "top 58%",
        scrub: 1
        
    }
})

gsap.from("#text",{
    scale: 0.8,
     opacity:0,
     duration: 1,
     // stagger: 0.4,
     scrollTrigger:{
         trigger: '#text',
         scroller: 'body',
         // markers: true,
         start: "top 60%",
         end: "top 58%",
         scrub: 1
         
     }
 })
 
gsap.from("#page3",{
    scale: 0.8,
     opacity:0,
     duration: 1,
     // stagger: 0.4,
     scrollTrigger:{
         trigger: '#page3',
         scroller: 'body',
         // markers: true,
         start: "top 60%",
         end: "top 58%",
         scrub: 1
         
     }
 })