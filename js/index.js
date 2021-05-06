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


function changeColor() {
    let array = document.getElementsByTagName('button');
    
    for (let i = 0; i < array.length; i++) {
        array[i].classList.toggle('color_blue');
    }

}
setInterval(changeColor, 1000);

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