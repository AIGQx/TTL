//carousel
const carousel = document.querySelector('.carousel');
const carouselItems = carousel.querySelectorAll('.carousel-item');
const prevCarousel = carousel.querySelector('.prev');
const nextCarousel = carousel.querySelector('.next');

//carouselProjects 
const carouselProjects = document.querySelector('.projects');
const carouselItemsProjects = carouselProjects.querySelectorAll('.project-card');
const prevCarouselProjects = carouselProjects.querySelector('.prev');
const nextCarouselProjects = carouselProjects.querySelector('.next');


const access = document.querySelector('.access');
const actualHour = new Date();
const output = document.querySelector('.button-output');
const isEven = document.getElementById('isEven');
const actualTime = actualHour.getHours() + ':' + actualHour.getMinutes().toString().padStart(2, '0');
const nextScrollButton = document.getElementById('nextSectionBtn');
const sections = document.querySelectorAll('section');
let currentSectionIndex = 0;
let lastEnterTimestamp = 0;
let index = 0;
updateCarousel(carouselItems);
updateCarousel(carouselItemsProjects);

function updateCarousel(data) {

    data.forEach((item, i) => {
        if (i === index) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
function deleteOutput() {
    const outputNumbers = output.querySelectorAll('a');

    if (outputNumbers.length > 10) {
        const elementsToRemove = outputNumbers.length - 10;
        for (let i = 0; i < elementsToRemove; i++) {
            if (outputNumbers[i]) {
                outputNumbers[i].classList.add('fade-out');
                outputNumbers[i].addEventListener('animationend', function () {
                    outputNumbers[i].remove();
                    output.scrollTop = output.scrollHeight;
                });
            }
        }
    }
    output.scrollTop = output.scrollHeight;
}
isEven.addEventListener('keypress', (event) => {
    const currentTimestamp = Date.now();
    if ( event.key !== 'Enter' || currentTimestamp - lastEnterTimestamp < 600 || isEven.value === '') return console.log("23");
    if (isEven.value % 2 == 0) {
        output.innerHTML += `<a> <h5 class="logText">> ${actualTime} </h5>: <p class="logText miLog">  ${isEven.value} is even </p> </a>`;
        deleteOutput();
        lastEnterTimestamp = currentTimestamp;
    } else {
        output.innerHTML += `<a> <h5 class="logText">> ${actualTime} </h5>: <p class="logText miLog">  ${isEven.value} is odd </p> </a>`;
        deleteOutput();
        lastEnterTimestamp = currentTimestamp;
    }
});
prevCarousel.addEventListener('click', () => {
    if (carouselItems[index].classList.contains('itemToRight')) {
        carouselItems[index].classList.remove('itemToRight');
    }
    index = (index - 1 + carouselItems.length) % carouselItems.length;
    carouselItems[index].classList.add('itemToLeft');
    updateCarousel(carouselItems);
});
nextCarousel.addEventListener('click', () => {
    if (carouselItems[index].classList.contains('itemToLeft')) {
        carouselItems[index].classList.remove('itemToLeft');
    }
    index = (index + 1) % carouselItems.length;
    carouselItems[index].classList.add('itemToRight');
    updateCarousel(carouselItems);
});
prevCarouselProjects.addEventListener('click', () => {
    if (carouselItemsProjects[index].classList.contains('itemToRight')) {
        carouselItemsProjects[index].classList.remove('itemToRight');
    }
    index = (index - 1 + carouselItemsProjects.length) % carouselItemsProjects.length;
    carouselItemsProjects[index].classList.add('itemToLeft');
    updateCarousel(carouselItemsProjects);
});
nextCarouselProjects.addEventListener('click', () => {
    if (carouselItemsProjects[index].classList.contains('itemToLeft')) {
        carouselItemsProjects[index].classList.remove('itemToLeft');
    }
    index = (index + 1) % carouselItemsProjects.length;
    carouselItemsProjects[index].classList.add('itemToRight');
    updateCarousel(carouselItemsProjects);
});