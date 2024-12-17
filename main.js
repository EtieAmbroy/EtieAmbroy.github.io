const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('#navbar');
let sections = document.querySelectorAll('section , sectionc');
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = ( ) => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('ri-close-line-x');
    navbar.classList.toggle('active');
}

const scrollRevealOption = {
    distance:"50px",
    origin:"bottom",
    duration: 1000,
};
ScrollReveal().reveal(".about-content .About " , {
    ...scrollRevealOption ,
});
ScrollReveal().reveal(".about-content .about__description" , {
    ...scrollRevealOption ,
    delay: 500 ,
    interval: 500
});
ScrollReveal().reveal(".about-content .btn" , {
    ...scrollRevealOption ,
    delay: 500 ,
    interval: 500
});
ScrollReveal().reveal(".services .heading" , {
    ...scrollRevealOption,
  
});
ScrollReveal().reveal(".Service-container .service-information" , {
    ...scrollRevealOption,
});
var typed = new Typed(".text" , {
    strings:["Photographer" ],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});