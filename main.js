const openMenu = document.querySelector('.bx-menu');
const navBar = document.querySelector('.navbar');
const closeMenu = document.querySelector('.fa-xmark');
const btnDarkMode = document.querySelector('.btn_dark-mode');
const sliderTrasnlateX = document.querySelectorAll('.slider_container');



// const sliders = [...document.querySelectorAll('.slider_img-container')];

const sliderContainer = document.querySelector('.slider_container');
const navList = document.querySelectorAll('.nav_list')
const nav = document.querySelector('.nav');
const home =document.querySelector('.home');
const about = document.querySelector('.about');
const skills = document.querySelector('.skills');
const contact = document.querySelector('.contact');
const bgSlider = document.querySelectorAll('.temporal');
const bgPortafolio = document.querySelector('.skills_portafolio-container')
const bxMenu = document.querySelector('.bx-menu');

// enviar correo
// const btnSendEmail = document.getElementById('sendEmail')

// btnSendEmail.addEventListener('click', (e) => {
//     e.preventDefault();
//     const email = document.getElementById('name').value;
//     const name = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     window.location.href=`mailto:josueventura@gmail.com?subject=envioDesdeFormulario&body=Name%3A${name}%0AEmail%3A${email}%0AMessage%3A${message}`
// })


/*------Slider-------------*/
const sliderPrev = document.querySelector('.slider_prev');
const sliderNext = document.querySelector('.slider_next');
const sliderTrasnlateContainer = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider_img-container');
let sliderSectionLast = sliderSection[sliderSection.length - 1]

sliderTrasnlateContainer.insertAdjacentElement('afterbegin', sliderSectionLast);

function Prev() {
    let sliderSection = document.querySelectorAll('.slider_img-container');
    let sliderSectionLast = sliderSection[sliderSection.length - 1]
        sliderTrasnlateContainer.style.marginLeft = "0";
        sliderTrasnlateContainer.style.transition = "all 0.5s";
    setTimeout(function() {
        sliderTrasnlateContainer.style.marginLeft = "none";
        sliderTrasnlateContainer.insertAdjacentElement('afterbegin', sliderSectionLast);
        sliderTrasnlateContainer.style.marginLeft = "-100%";
        
    }, 500);
}

function Next() {
    let sliderSectionFirst = document.querySelectorAll('.slider_img-container')[0];
    
        sliderTrasnlateContainer.style.marginLeft = "-200%";
        sliderTrasnlateContainer.style.transition = "all 0.5s";
    setTimeout(function() {
        sliderTrasnlateContainer.style.marginLeft = "none";
        sliderTrasnlateContainer.insertAdjacentElement('beforeend', sliderSectionFirst);
        sliderTrasnlateContainer.style.marginLeft = "-100%";
        
    }, 200);
}


sliderPrev.addEventListener('click', (e) => {
    Prev()
});

sliderNext.addEventListener('click', (e) => {
    Next()
});

setInterval(() => {
    Next()
}, 10000);


/*------Dark Mode----------*/
function darkModeSwitch() {
    nav.classList.toggle('dark_mode-nav')
    navBar.classList.toggle('navbarDarkMode')
    home.classList.toggle('bgHomeDarkMode')
    about.classList.toggle('bgAboutDarkMode')
    skills.classList.toggle('bgSkillsDarkMode')
    contact.classList.toggle('bgContactDarkMode')
    bgSlider.forEach(element => {
        element.classList.toggle('bgSliderDarkMode')
    });
    
    bgPortafolio.classList.toggle('bgPortafolioDarkMode')
    bxMenu.classList.toggle('bx-menuDark')
    sliderContainer.classList.toggle('slider_containerDarkMode')
}

btnDarkMode.addEventListener('click', (e) => {
    darkModeSwitch();
})

let value;


openMenu.addEventListener('click', (e) => {
    navBar.classList.toggle('navbar_hidden')
    bxMenu.classList.toggle('bx-menu-hide')
});

closeMenu.addEventListener('click', (e) => {
    navBar.classList.toggle('navbar_hidden')
    bxMenu.classList.toggle('bx-menu-hide')
});

btnDarkMode.addEventListener('click', (e) => {
    btnDarkMode.classList.toggle('btn_dark-mode-change')
});

navList.forEach(element => {
    element.addEventListener('click', (e) => {
        navBar.classList.toggle('navbar_hidden')
        bxMenu.classList.toggle('bx-menu-hide')
    });
});



// sliderTrasnlateX.forEach(trasnlateX => {
//     trasnlateX.addEventListener('click', (e) => {
        
//         let position = e.target
       

//         if(position === sliderPrev) {
           
           
//         }
        
//         if(position === sliderNext) {
            
           
//         }
        
//         let operation = position * -50
        
        // function changePosition(position) {
            
        //     const currentElement = Number(document.querySelector('.body_img').dataset.id);

        //     value = currentElement;
        //     value += position;

        //    const prevPosition = (value) => {
        //     if(value -1 < 0) {
        //         value = sliders.length -1
        //     } else {
        //         value = -1
        //     }
        //    }

          
            // if(value === 0 || value === sliders.length+1) {
            //     value = value === 0 ? sliders.length : 1
            // }
           
        //     sliderTrasnlateContainer[currentElement-1].style.transform = `translateX(${value * -16.5}%)`;
        //     sliderTrasnlateContainer[value-1].style.transform = `translateX(${value * -66.67}%)`;
        //     return value
        // }
        // console.log(changePosition(position))

        
        // sliderTrasnlateContainer.style.transform = `translateX(${operation}%)`

       
//     })

// })

