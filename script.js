const watchDocument = document.getElementById('watch');

let hours = 0;
let minutes = 0;
let seconds = 0;
let interval;

function init(){
    watch();
    interval = setInterval(watch, 1000)
}

function pause(){
    clearInterval(interval)
    
}

function reset(){
    clearInterval(interval)
    hours = 0;
    seconds = 0;
    minutes = 0;
    watchDocument.innerHTML = "00:00:00"

 
}

const digitZero = (digit) => {
    if(digit < 10){
        return `0${digit}`
    } else{
        return digit
    }
}


function watch(){
    seconds++;
    
    if(seconds === 60){
        seconds = 0;
        minutes++;
        
    } if(minutes === 60){
        minutes = 0;
        hours++;
    }
        watchDocument.innerHTML = digitZero(hours) + ":" + digitZero(minutes) + ":" + digitZero(seconds);
}

