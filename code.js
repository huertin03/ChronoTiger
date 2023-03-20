const startBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#resetBtn");

const space = document.querySelector(`[data-type="space"]`);
const c = document.querySelector(`[data-type="c"]`);

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;
let msec = 0;

let display = "00:00.00";

function fade(element) {
   var op = 1;  // initial opacity
   var timer = setInterval(function () {
       if (op <= 0.1){
           clearInterval(timer);
           element.style.display = 'none';
       }
       element.style.opacity = op;
       element.style.filter = 'alpha(opacity=' + op * 100 + ")";
       op -= op * 0.1;
   }, 50);
}

document.addEventListener("keypress", function(event) {
   if (event.key === " ") {
      document.getElementById("startBtn").click();
      fade(space);
   }
   if (event.key === "c") {
      document.getElementById("resetBtn").click();
   }
});

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
      position("00:00.00");
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

   if (!(hrs == "00")) {
      display = hrs+":"+mins+":"+secs; 
   } else {
      display = mins+":"+secs+"."+msec; 
   }

   position(display);

   function pad(unit) {
      return (("0") + unit).length > 2 ? unit : "0" + unit;
   }
}

function position(dis) {
   let clase;
      for (let i = 7; i >= 0; i--) {
         if (dis.charAt(i) == '.') clase = "dot";
         else if (dis.charAt(i) == ':') clase = "dots";
         else clase = "number"+dis.charAt(i);
         document.getElementById(i).className = clase;
      }     
}