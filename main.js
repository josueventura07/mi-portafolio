const openMenu = document.querySelector('.bx-menu');
const navBar = document.querySelector('.navbar');
const closeMenu = document.querySelector('.fa-xmark');
const btnDarkMode = document.querySelector('.btn_dark-mode');
const sliderTrasnlateX = document.querySelectorAll('.slider_container');
const sliderPrev = document.querySelector('.slider_prev');
const sliderNext = document.querySelector('.slider_next');
const sliderTrasnlateContainer = document.querySelector('.slider_traslateX');
const sliders = [...document.querySelectorAll('.slider_img-container')];
const navList = document.querySelectorAll('.nav_list')



let value;


openMenu.addEventListener('click', (e) => {
    navBar.classList.toggle('navbar_hidden')
});

closeMenu.addEventListener('click', (e) => {
    navBar.classList.toggle('navbar_hidden')
});

btnDarkMode.addEventListener('click', (e) => {
    btnDarkMode.classList.toggle('btn_dark-mode-change')
});

navList.forEach(element => {
    element.addEventListener('click', (e) => {
        navBar.classList.toggle('navbar_hidden')
    });
});



sliderTrasnlateX.forEach(trasnlateX => {
    trasnlateX.addEventListener('click', (e) => {
        
        let position = e.target
       

        if(position === sliderPrev) {
            position = 0
            
        }
        
        if(position === sliderNext) {
            position = 1
        }
        let operation = position * -50
        
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

        //    const nextPosition = (value) =>  {
        //     if(value +1 > sliders.length -1) {
        //         value = 0
        //     } else {
        //         value = +1
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

        
        sliderTrasnlateContainer.style.transform = `translateX(${operation}%)`

       
    })

})

