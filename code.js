const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
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
   }
   else{
      paused = true;
      elapsedTime = Date.now() - startTime;
      clearInterval(intervalId);
   }
});

resetBtn.addEventListener("click", () => {
   if(paused){
      clearInterval(intervalId);
      startTime = 0;
      elapsedTime = 0;
      currentTime = 0;
      hrs = 0;
      mins = 0;
      secs = 0;
      msec = 0;
      timeDisplay.textContent = "00:00:00.00"
   }
   else {
      savehrs = hrs;
      savemins = mins;
      savesecs = secs;
      savemsec = msec;
      console.log("Record: "+savehrs+":"+savemins+":"+savesecs+"."+savemsec);
   }
});

function updateTime() {
   elapsedTime = Date.now() - startTime;

   msec = Math.floor((elapsedTime / 10) % 100);
   secs = Math.floor((elapsedTime / 1000) % 60);
   mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
   hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

   msec = pad(msec);
   secs = pad(secs);
   mins = pad(mins);
   hrs = pad(hrs);

   timeDisplay.textContent = `${hrs}:${mins}:${secs}.${msec}`;

   function pad(unit) {
      return (("0") + unit).length > 2 ? unit : "0" + unit;
   }
}