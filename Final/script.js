// This is the main script file for the project.

const startElement = document.getElementById("start");
const stopElement = document.getElementById("stop");
const resetElement = document.getElementById("reset");

const breakStartElement = document.getElementById("breakStart");
const breakStopElement = document.getElementById("breakStop");
const breakResetElement = document.getElementById("breakReset");
const timerElement = document.getElementById("timer");

const breakElement = document.getElementById("break");
const workElement = document.getElementById("work");

let interval;
let timeLeft = 1500;

let breakInterval;
let breakTime = 300;

resetElement.style.display = "none";
breakStartElement.style.display = "none";
breakStopElement.style.display = "none";
breakResetElement.style.display = "none";

function updateTimer(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
  timerElement.innerHTML = formattedTime;
}

function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer(timeLeft);
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time's up!");
      timeLeft = 1500;
      updateTimer(timeLeft);
    }
  }, 1000);
  startElement.style.display = "none";
  resetElement.style.display = "inline-block";
  breakElement.style.display = "none";
}

function stopTimer() {
  clearInterval(interval);
  startElement.style.display = "inline-block";
}

function resetTimer() {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer(timeLeft);
  resetElement.style.display = "none";
  startElement.style.display = "inline-block";
  breakElement.style.display = "inline-block";
}

function updateBreakTimer(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
  timerElement.innerHTML = formattedTime;
}

function showWork() {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer(timeLeft);
  workElement.style.display = "inline-block";
  breakStartElement.style.display = "none";
  breakStopElement.style.display = "none";
  breakResetElement.style.display = "none";
  resetElement.style.display = "none";
  startElement.style.display = "inline-block";
  stopElement.style.display = "none";
  breakElement.style.display = "inline-block";
}

function showBreak() {
  clearInterval(interval);
  breakTime = 300;
  updateBreakTimer(breakTime);
  breakStartElement.style.display = "inline-block";
  breakStopElement.style.display = "none";
  breakResetElement.style.display = "none";
  resetElement.style.display = "none";
  startElement.style.display = "none";
  stopElement.style.display = "none";
}

function startBreak() {
  console.log("Break started");
  breakInterval = setInterval(() => {
    breakTime--;
    updateBreakTimer(breakTime);
    if (breakTime === 0) {
      clearInterval(breakInterval);
      alert("Break's over!");
      breakTime = 300;
      updateBreakTimer(breakTime);
    }
  }, 1000);
  workElement.style.display = "none";
  breakStartElement.style.display = "none";
  breakStopElement.style.display = "inline-block";
  breakResetElement.style.display = "inline-block";
}

function stopBreak() {
  clearInterval(breakInterval);
  breakStartElement.style.display = "inline-block";
  breakStopElement.style.display = "none";
}

function resetBreak() {
  clearInterval(breakInterval);
  breakTime = 300;
  updateBreakTimer(breakTime);
  workElement.style.display = "inline-block";
}

breakElement.addEventListener("click", showBreak);
workElement.addEventListener("click", showWork);
breakStartElement.addEventListener("click", startBreak);
breakStopElement.addEventListener("click", stopBreak);
breakResetElement.addEventListener("click", resetBreak);

startElement.addEventListener("click", startTimer);
stopElement.addEventListener("click", stopTimer);
resetElement.addEventListener("click", resetTimer);
