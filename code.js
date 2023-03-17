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

let display = "00:00.00";

document.addEventListener("keypress", function(event) {
   if (event.key === " ") {
      /*console.log("Space pressed");*/
      document.getElementById("startBtn").click();
   }
});


document.addEventListener("keypress", function(event) {
   if (event.key === "c") {
      /*console.log("C pressed");*/
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
      timeDisplay.textContent = "00:00:00.00"
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

   timeDisplay.textContent = `${hrs}:${mins}:${secs}.${msec}`;

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
   let eid = 0;
   console.log(dis);
   if (dis.charAt(dis.length-3) == '.') {
      for (let i = 7; i > 0; i--) {
         
            console.log("Primer for");
            console.log("EID: "+i)
            console.log("Char at eid: "+dis.charAt(i))
            switch (dis.charAt(i)) {
               case '1':
                  console.log("case 1");
                  document.getElementById(i).className = "number1";
                  break;
               case '2':
                  console.log("case 2");
                  document.getElementById(i).className = "number2";
                  break;
               case '3':
                  console.log("case 3");
                  document.getElementById(i).className = "number3";
                  break;
               case '4':
                  console.log("case 4");
                  document.getElementById(i).className = "number4";
                  break;
               case '5':
                  console.log("case 5");
                  document.getElementById(i).className= "number5";
                  break;
               case '6':
                  console.log("case 6");
                  document.getElementById(i).className= "number6";
                  break;
               case '7':
                  console.log("case 7");
                  document.getElementById(i).className= "number7";
                  break;
               case '8':
                  console.log("case 8");
                  document.getElementById(i).className= "number8";
                  break;
               case '9':
                  console.log("case 9");
                  document.getElementById(i).className= "number9";
                  break;
               default:
                  console.log("default");
                  document.getElementById(i).className= "number0";
                  break;
            }
      }
   } else if (dis.charAt(dis.length-3) == ':') {
      document.getElementById("intersect2").className= "dots";
   }
}