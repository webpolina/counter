// Определим значения, для вычислений
const year = document.querySelector('#year');

const days = document.querySelector('#days');

const hours = document.querySelector('#hours');

const minutes = document.querySelector('#minutes');

const seconds = document.querySelector('#seconds');
const count = document.querySelector('#count');
const preloader = document.querySelector('#preloader');


// Делаем расчеты
const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Устанавливаем год на страницу
year.innerText = currentYear + 1;

function updateCounter() {

    // Расчеты

    const currentTime = new Date();

    const diff = nextYear - currentTime; 
    // Перевод в дни, часы, минуты и секунды
    
    const daysLeft = Math.floor(diff/1000/60/60/24);
    
    // Перевод в часы, и получаем остаток от деления на 24 часа (преобразовали в дни)
    
    const hoursLeft = Math.floor(diff/1000/60/60)%24;
    
    
    const minutesLeft = Math.floor(diff/1000/60)%60;
    
    //Секунды
    const secondsLeft = Math.floor(diff/1000) %60;
    
    days.innerText= daysLeft;
    hours.innerText= hoursLeft;
    minutes.innerText= minutesLeft
    seconds.innerText= secondsLeft;   
}

//Каждую секунду счетчик считает

setInterval(updateCounter, 1000);

setTimeout(function (){
preloader.remove();
count.style.display='flex';

}, 1000)