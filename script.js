// loader

function loader(){
    document.addEventListener("DOMContentLoaded", function(){
        const counter3 = document.querySelector(".counter-3");
        for(let i = 0; i < 2; i++){
           for(let j = 0; j < 10; j++){
              const div = document.createElement("div");
              div.className = "num";
              div.textContent = j;
              counter3.appendChild(div);
           }
        }
     
        const finalDiv = document.createElement("div");
        finalDiv.className = "num";
        finalDiv.textContent = "0";
        counter3.appendChild(finalDiv);
     
        function animate(counter, duration, delay = 0){
           const numHeight = counter.querySelector(".num").clientHeight;
           const totalDistance = (counter.querySelectorAll(".num").length-1)*numHeight;
     
           gsap.to(counter,{
              y: -totalDistance,
              duration:duration,
              delay:delay,
              ease:"power2.inOut",
           })
        }
     
        animate(counter3, 5);
        animate(document.querySelector(".counter-2"), 6);
        animate(document.querySelector(".counter-1"), 2,4)
     })
     
     gsap.to(".digit",{
        top:"-150px",
        stagger:{
           amount:0.25,
        },
        delay:6,
        duration:1,
        ease:"power4.inOut",
     })
     
     gsap.from(".loader-1",{
        width:0,
        duration:6,
        ease:"power2.inOut",
     })
     
     gsap.from(".loader-2",{
        width:0,
        delay:1.9,
        duration:2,
        ease:"power2.inOut",
     })
     
     gsap.to(".loader",{
        background:"none",
        delay:6,
        duration:0.1
     })
     
     gsap.to(".loader-1",{
        rotate:90,
        y:-50,
        duration:0.5,
        delay:6
     })
     
     gsap.to(".loader-2",{
        x:-75,
        y:75,
        duration:0.5,
     },"<")
     
     gsap.to(".loader",{
        scale:40,
        duration:1,
        delay:7,
        ease:"power2.inOut"
     })
     
     gsap.to(".loader",{
        rotate:45,
        y:500,
        x:2000,
        duration:1,
        delay:7,
        ease:"power2.inOut"
     })
     
     gsap.to(".loading-screen",{
        opacity:0,
        display: "none",
        duration:0.5,
        delay:7.5,
        ease:"power1.inOut"
     })
}

loader();



const gcfe = document.querySelector('.gcfe');
const ocfe = document.querySelector(".ocfe");
const pcfe = document.querySelector(".pcfe");
const green = document.querySelector(".green");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");
const b1 = document.querySelector(".b1")
const b2 = document.querySelector(".b2")
const b3 = document.querySelector(".b3")


//cursor
function spark(event){
    let i = document.createElement('i');
    i.style.left = (event.pageX) + 'px';
    i.style.top = (event.pageY) + 'px';
    i.style.scale = `${Math.random() * 2 + 1}`;
    i.style.setProperty('--x', getRandomTransitionValue());
    i.style.setProperty('--y', getRandomTransitionValue());

    document.body.appendChild(i);
    setTimeout(() => {
        document.body.removeChild(i);
    },10000)

}

function getRandomTransitionValue(){
    return `${Math.random() * 250 - 100}px`;
}

document.addEventListener('mousemove',spark);


//menu//
var menu = document.querySelector(".links i")
var cross = document.querySelector("#full i")
console.log(menu)
menu.addEventListener("click",(dets) =>{
    console.log(dets)
})

var time = gsap.timeline()
time.to("#full",{
    right:0,
    duration:0.2,
})

time.from("#full h4",{
    x:150,
    duration:0.3,
    stagger:0.28,
    opacity:0,
})

time.from("#full i",{
    opacity:0
})

time.pause()

menu.addEventListener("click",function(){
    time.play()
})

cross.addEventListener("click",function(){
    time.reverse()
})


// ---------------------------------------------------------

gcfe.addEventListener("click", ()=>{
    green.style.opacity = "1"
    green.style.transform = "rotate(0deg)"
    b1.style.backgroundColor = "#00854C";

    pink.style.opacity = '0'
    pink.style.transform = 'rotate(-90deg)'
    orange.style.opacity = '0'
    orange.style.transform = 'rotate(-90deg)'
})

ocfe.addEventListener("click", ()=>{
    orange.style.opacity = '1'
    orange.style.transform = 'rotate(0deg)'
    b2.style.backgroundColor = "#EDDCD9";


    pink.style.opacity = '0'
    pink.style.transform = 'rotate(-90deg)'
    green.style.opacity = '0'
    green.style.transform = 'rotate(-90deg)'
})

pcfe.addEventListener("click", ()=>{
    pink.style.opacity = '1'
    pink.style.transform = 'rotate(0deg)'
    b3.style.backgroundColor = "#771D5D";

    orange.style.opacity = '0'
    orange.style.transform = 'rotate(-90deg)'
    green.style.opacity = '0'
    green.style.transform = 'rotate(-90deg)'
})



// hit - 2

let next = document.getElementById('next');
let prev = document.getElementById('prev');
let hit_3 = document.querySelector('.hit_3');
let items = document.querySelectorAll('.hit_3 .item');
let countItem = items.length;
let active = 1;
let other_1 = null;
let other_2 = null;
next.onclick = () => {
    hit_3.classList.remove('prev');
    hit_3.classList.add('next');
    active =active + 1 >= countItem ? 0 : active + 1;
    other_1 =active - 1 < 0 ? countItem -1 : active - 1;
    other_2 = active + 1 >= countItem ? 0 : active + 1;
    changeSlider();
}
prev.onclick = () => {
    hit_3.classList.remove('next');
    hit_3.classList.add('prev');
    active = active - 1 < 0 ? countItem - 1 : active - 1;
    other_1 = active + 1 >= countItem ? 0 : active + 1;
    other_2 = other_1 + 1 >= countItem ? 0 : other_1 + 1;
    changeSlider();
}
const changeSlider = () => {
    let itemOldActive = document.querySelector('.hit_3 .item.active');
    if(itemOldActive) itemOldActive.classList.remove('active');

    let itemOldOther_1 = document.querySelector('.hit_3 .item.other_1');
    if(itemOldOther_1) itemOldOther_1.classList.remove('other_1');

    let itemOldOther_2 = document.querySelector('.hit_3 .item.other_2');
    if(itemOldOther_2) itemOldOther_2.classList.remove('other_2');

    items.forEach(e => {
        e.querySelector('.image img').style.animation = 'none';
        e.querySelector('.image figcaption').style.animation = 'none';
        void e.offsetWidth;
        e.querySelector('.image img').style.animation = '';
        e.querySelector('.image figcaption').style.animation = '';
    })

    items[active].classList.add('active');
    items[other_1].classList.add('other_1');
    items[other_2].classList.add('other_2');

    clearInterval(autoPlay);
    autoPlay = setInterval(() => {
        next.click();
    }, 5000);
}
let autoPlay = setInterval(() => {
    next.click();
}, 5000);




// hit - 3 js

var tl0 =gsap.timeline({
    delay:.5,
    duration:1
});
tl0



var tl = gsap.timeline({scrollTrigger:{
    trigger:"#hit-3",
    // markers:true,
    start:"50% 50%",
    end:"120% 50%",
    scrub:2,
    pin:true,
}});
tl
.to("#lineone",{
    marginTop: "-120vh",
},'baba')
.to("#linetwo",{
    marginTop: "20vh",
},'baba')
.from(".textarea #slider-text",{
    // marginTop: "-90vh",
    marginLeft : "-10vw",
    opacity: 0
},'baba')
.from(".textarea #slider-text2",{
    // marginTop: "-90vh",
    marginRight : "50vw",
    opacity: 0
},'baba')
.from(".textarea p",{
    opacity: 0
})
.from(".textarea a",{
    opacity: 0
})
.from(".textarea h2",{
    opacity: 0
})




// hit - 4 styling
var tl = gsap.timeline({scrollTrigger:{
    trigger:"#hit-4",
   //  markers:true,
    start:"50% 50%",
    end:"150% 50%",
    scrub:2,
    pin:true
}});
tl
.to("#center",{
   height: "100vh",
},'a')
.to("#top",{
    top: "-50%",
 },'a')
 .to("#bottom",{
    bottom: "-50%",
 },'a')
.to("#top-h1",{
    top: "60%"
 },'a')
 .to("#bottom-h1",{
    bottom: "-30%"
 },'a')
.to("#center-h1",{
   top: "-30%"
},'a')
.to(".page4-content",{
   delay: -0.2,
   marginTop: "0%"
})




var t5 = gsap.timeline({scrollTrigger:{
    trigger:"#hit-5",
    // markers:true,
    start:"28% 88%",
    end:"50% 50%",
    scrub:4,
    // pin:true,
}});
t5.
from(".up .menu-card",{
    opacity: 0,
    top:"50%"
})
t5.
from(".down .menu-card",{
    opacity: 0,
    top:"50%"
})
