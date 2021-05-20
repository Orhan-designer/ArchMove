//Функция модального окна!
function Modal() { 
    let block = document.querySelector('.modal');
    let button = document.getElementsByClassName('active');
    
    //Обрабатываем события
    button[0].addEventListener('click', openModalWindow);
    
    function openModalWindow() {
        block.style.display = 'block';
        modalInit('close_window', '.modal');
    }
    
    function modalInit(name, container) {
        let butModal = document.getElementById(name);
        butModal.addEventListener('click', function() {closeModalWindow(container)});
    }
    
    function closeModalWindow(container) {
        console.log(container);
        let elem = document.querySelector(container);
        elem.style.display = 'none';
    }
}
Modal();

//Функция для автоматической смены цвета, для кнопки!
function changeColor() {
    let array = document.getElementsByTagName('button');
    
    for (let i = 0; i < array.length; i++) {
        array[i].classList.toggle('color_blue');
    }

}
setInterval(changeColor, 1000);

//Функция для липкого меню-бургера, при скроле на телефонах!
window.onscroll = function() {myFunction()};
let hamburgerMenu = document.getElementsByClassName('hamburger-menu');
let sticky = hamburgerMenu.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        hamburgerMenu.classList.add('sticky');
    } else {
        hamburgerMenu.classList.remove('sticky');
    }
};



/*let slideIndex = 1; //Функция для слайдера!
showSlides(slideIndex);

function plusSlides(n) {

    showSlides(slideIndex += n);

}

function currentSlide(n) {

    showSlides(slideIndex = n);

}

function showSlides(n) {

    let i;
    let slides = document.getElementsByClassName("slide-image");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

}*/

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide-image");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].style.display = "block";
    
} 
setInterval(showSlides, 2000);// Меняется каждые 2 секунды.

/*let mainContainer = document.getElementById('container');
let count = 0; 
let colorNumber = 0;

let timer = setInterval(() => {
    createElement(mainContainer);

    colorNumber++;
    if (colorNumber > 4) colorNumber = 0;

    count++;
    if (count >= 60) clearInterval(timer);

}, 100);

function createElement(container) {
    let color = ['green', 'blue', 'red', 'brown', 'gold'];
    let newElement = document.createElement('h1');
    newElement.className = 'header';
    newElement.innerHTML = 'Я новый загаловок';
    container.append(newElement);
    newElement.style.backgroundColor = color[colorNumber];
}*/