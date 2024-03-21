//carousel
const carousel = document.querySelector('.carousel');
const carouselItems = carousel.querySelectorAll('.carousel-item');
const prev = carousel.querySelector('.prev');
const next = carousel.querySelector('.next');
const access = document.querySelector('.access');
const actualHour = new Date();
const output = document.querySelector('.button-output');
const isEven = document.getElementById('isEven');
const actualTime = actualHour.getHours() + ':' + actualHour.getMinutes().toString().padStart(2, '0');
let lastEnterTimestamp = 0;
let index = 0;
updateCarousel();

function updateCarousel() {
    carouselItems.forEach((item, i) => {
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
isEven.addEventListener('keypress', () => {
    const currentTimestamp = Date.now();
    if (key !== 'Enter') return;
    if (currentTimestamp - lastEnterTimestamp < 600) return;
    if (isEven.value === '') return;
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
isEven.addEventListener('keypress', (event) => {
    if (event.key < '0' || event.key > '9') {
        event.preventDefault();
    }
});
prev.addEventListener('click', () => {
    if (carouselItems[index].classList.contains('imgtoright')) {
        carouselItems[index].classList.remove('imgtoright');
    }
    index = (index - 1 + carouselItems.length) % carouselItems.length;
    carouselItems[index].classList.add('imgtoeft');
    updateCarousel();
});
next.addEventListener('click', () => {
    if (carouselItems[index].classList.contains('imgtoleft')) {
        carouselItems[index].classList.remove('imgtoleft');
    }
    index = (index + 1) % carouselItems.length;
    carouselItems[index].classList.add('imgtoright');
    updateCarousel();
});