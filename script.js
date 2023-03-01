

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


const sr = ScrollReveal ({
    distance: '80px',
    duration: 2000,
    reset: true 
})

sr.reveal('header',{delay:300, origin:'top'})
sr.reveal('.text,.social',{delay:300, origin:'bottom'})



var typingEffect = new Typed(".muliText",{
    strings:["An Author", "A Student","An Artist"],
    loop:true,
    typeSpeed:100,
    backSpeed:80,
    backDelay:1500,
});