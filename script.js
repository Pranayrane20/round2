const gcfe = document.querySelector('.gcfe');
const ocfe = document.querySelector(".ocfe");
const pcfe = document.querySelector(".pcfe");
const green = document.querySelector(".green");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");
const b1 = document.querySelector(".b1")
const b2 = document.querySelector(".b2")
const b3 = document.querySelector(".b3")



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

// $('.textarea h1').textillate({initialDelay: 200, in: { effect: 'fadeInUp',delayScale:1, delay: 40 } });


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
