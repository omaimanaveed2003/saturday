var sec = 0;
var min = 0;
var hour = 0;

var secVal = document.getElementById("sec")
var minVal = document.getElementById("min")
var hourVal = document.getElementById("hour")

var interval;
function renderVal(){
    secVal.innerHTML = sec;
    minVal.innerHTML = min;
    hourVal.innerHTML = hour;
    }
function timeStart (){
    StartBtn.disabled = true;
    StopBtn.disabled = false;
    sec++;
    secVal.innerHTML = sec;
    if(sec == 60){
        min++;
sec = 0;
if(min == 60){
    hour++;
    min = 0;
}
}
  renderVal();
console.log(sec);
} 
function timer(){
    interval = setInterval(function(){
        timeStart();
    }, 1000);
}
function StopTimer (){
    clearInterval(interval);
    StopBtn.disabled = true;
    StartBtn.disabled = false;
}
function ResetTimer(){
    sec = 0; min = 0; hour = 0;
    StopTimer();
    renderVal();
}