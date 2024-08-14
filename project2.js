let startTime;
let elapsedTime = 0;
let timerInterval;
let laps = [];
let lapsContainer = document.getElementById('laps');
let display = document.getElementById('display');
let startButton = document.getElementById('startButton');
let pauseButton = document.getElementById('pauseButton');
let resetButton = document.getElementById('resetButton');
let lapButton = document.getElementById('lapButton');

function startStopwatch() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        display.textContent = formatTime(elapsedTime);
    }, 10);
    startButton.disabled = true;
    pauseButton.disabled = false;
}

function pauseStopwatch() {
    clearInterval(timerInterval);
    startButton.disabled = false;
    pauseButton.disabled = true;
}

function resetStopwatch() {
    clearInterval(timerInterval);
    startButton.disabled = false;
    pauseButton.disabled = true;
    elapsedTime = 0;
    laps = [];
    lapsContainer.innerHTML = '';
    display.textContent = '00:00:00.000';
}

function recordLap() {
    let lapTime = elapsedTime;
    laps.push(lapTime);
    let li = document.createElement('li');
    li.textContent = `Lap ${laps.length}: ${formatTime(lapTime)}`;
    lapsContainer.prepend(li);
}

function formatTime(milliseconds) {
    let hours = Math.floor(milliseconds / 3600000);
    let minutes = Math.floor((milliseconds % 3600000) / 60000);
    let seconds = Math.floor((milliseconds % 60000) / 1000);
    let centiseconds = Math.floor((milliseconds % 1000) / 10);
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
}
