let bars = document.getElementById('bars');
let menu = document.getElementById('menu');
let xmark = document.getElementById('xmark');



bars.addEventListener("click", function () {
    menu.classList.add("active")
})
xmark.addEventListener("click", function () {
    menu.classList.remove("active")
})
const sr = ScrollReveal ({
    distance:'600px',
    duration:1500,
    delay:400,
    reset:true
})

sr.reveal('.info-boxes',{delay:10, origin:'right'})
sr.reveal('.main-text',{delay:10, origin:'right'})
sr.reveal('.card',{delay:10, origin:'bottom'})
sr.reveal('.img',{delay:10, origin:'left'})
sr.reveal('.testimonial',{delay:10, origin:'right'})
sr.reveal('.box',{delay:10, origin:'bottom'})
