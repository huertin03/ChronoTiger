const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;
let msec = 0;

startBtn.addEventListener("click", () => {
   if(paused){
      paused = false;
      startTime = Date.now() - elapsedTime;
      intervalId = setInterval(updateTime, 10);
   } else {
      paused = true;
   }
});
resetBtn.addEventListener();

function updateTime() {
   elapsedTime = Date.now() - startTime;

   msec = Math.floor((elapsedTime / 10) % 100);
   secs = Math.floor((elapsedTime / 1000) % 60);
   mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
   hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

   timeDisplay.textContent = `${hrs}:${mins}:${secs}:${msec}`;
}

/*CONTINUE 8:46 OF BROCODE VIDEO*/