let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;

const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const display = document.getElementById('display');

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);

function startStop() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
        startStopBtn.innerText = 'Stop';
    } else {
        clearInterval(tInterval);
        running = false;
        startStopBtn.innerText = 'Start';
    }
}

function reset() {
    clearInterval(tInterval);
    running = false;
    startStopBtn.innerText = 'Start';
    display.innerText = '00:00:00';
    difference = 0;
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    display.innerText = hours + ':' + minutes + ':' + seconds;
}
