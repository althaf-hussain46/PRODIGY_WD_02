let timer;
let startTime;
let elapsedTime = 0;
let isRunning = false;

const display = document.querySelector('.display');
const hoursDisplay = document.querySelector('.hours');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');
const lapBtn = document.querySelector('.lap');
const lapsList = document.querySelector('.laps');

function formatTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);
  return {
    hours: hours.toString().padStart(2, '0'),
    minutes: minutes.toString().padStart(2, '0'),
    seconds: seconds.toString().padStart(2, '0')
  };
}

function updateTime() {
  const currentTime = Math.floor((Date.now() - startTime) / 1000) + elapsedTime;
  const formattedTime = formatTime(currentTime);
  hoursDisplay.textContent = formattedTime.hours;
  minutesDisplay.textContent = formattedTime.minutes;
  secondsDisplay.textContent = formattedTime.seconds;
}

function startTimer() {
  if (!isRunning) {
    startTime = Date.now();
    timer = setInterval(updateTime, 1000);
    isRunning = true;
  }
}

function pauseTimer() {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime += Math.floor((Date.now() - startTime) / 1000);
    isRunning = false;
  }
}

function resetTimer() {
  clearInterval(timer);
  elapsedTime = 0;
  hoursDisplay.textContent = '00';
  minutesDisplay.textContent = '00';
  secondsDisplay.textContent = '00';
  lapsList.innerHTML = '';
  isRunning = false;
}

function lapTimer() {
  if (isRunning) {
    const lapTime = Math.floor((Date.now() - startTime) / 1000) + elapsedTime;
    const formattedTime = formatTime(lapTime);
    const lapItem = document.createElement('li');
    lapItem.textContent = `${formattedTime.hours}:${formattedTime.minutes}:${formattedTime.seconds}`;
    lapsList.appendChild(lapItem);
  }
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', lapTimer);
