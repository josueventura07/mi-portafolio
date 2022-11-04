const openMenu = document.querySelector('.bx-menu');
const navBar = document.querySelector('.navbar');
const closeMenu = document.querySelector('.fa-xmark');
const btnDarkMode = document.querySelector('.btn_dark-mode')
const sliderCircleBottomContainer = document.querySelectorAll('.slider_circle-bottom-container')
const sliderNext = document.querySelector('.slider_next')
const sliderImgContainer = document.querySelector('.slider_img-container')



openMenu.addEventListener('click', (e) => {
    navBar.classList.toggle('navbar_hidden')
});

closeMenu.addEventListener('click', (e) => {
    navBar.classList.toggle('navbar_hidden')
});

btnDarkMode.addEventListener('click', (e) => {
    btnDarkMode.classList.toggle('btn_dark-mode-change')
});



sliderCircleBottomContainer.forEach((mainbtn, i) => {
    sliderCircleBottomContainer[i].addEventListener('click', () => {
        
        let position = i
        let operation = position * -50

        sliderImgContainer.style.transform = `traslateX(${operation}%)`
    })
});