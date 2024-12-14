// Select elements
const timerElement = document.getElementById('timer');
const previewButton = document.getElementById('preview-button');

var tl = gsap.timeline()

tl.from("h2",{
    y:-20,
    duration:0.8,
    opacity:0,
    delay:0.5
})

tl.from("#h11",{
    y:-20,
    opacity:0,
    duration:0.6,
    scale:0.2
})
tl.to("#cap",{
    transform:"translateX(-150%)",
    delay:1,
    
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
       start:"top 0%",
       marker:true,
       scrub:5,
       end:"top -150%",
       pin:true

    }
})

// tl.from("#pp",{
//     y:-20,
//     duration:0.8,
//     opacity:0,
//     delay:0.5
// })

tl.from("#pp",{
    y:-20,
    duration:0.3,
    opacity:0,
    delay:0,
    stagger:0.2
})

gsap.from("#box1",{
    scale:0,
    rotate:360,
    duration:3,
    repeat:-1,
    yoyo:true
})


// Countdown logic
function updateCountdown() {
    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const newYearDate = new Date(`January 1, ${nextYear} 00:00:00`);
    const timeDifference = newYearDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);

    timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// GSAP Animation for the preview button
previewButton.addEventListener('click', () => {
    gsap.fromTo(
        timerElement,
        { scale: 1, color: '#fff' },
        { scale: 1.5, color: '#FFD700', duration: 0.5, yoyo: true, repeat: 1 }
    );

    alert('Cheers to a new year and another chance for us to get it right.');
});

// Update the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

var path = "M 0 100 Q 700 100 1400 100" 
var finalpath = "M 0 100 Q 700 100 1400 100" 

var string = document.querySelector("#string")

string.addEventListener("mousemove",function(dets){
    path = `M 0 100 Q ${dets.x} ${dets.y} 1400 100`
    gsap.to("svg path",{
        attr:{d:path},
        duration:0.3,
        ease:"power3.out"

    })

})

string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalpath},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })
})

// gsap.from("h1",{
//     color:"black",
//     duration:2,
//     delay:1
// })