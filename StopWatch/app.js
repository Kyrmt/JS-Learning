let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let scounter = 0;
let mcounter = 0;
let hcounter = 0;
let clickcounter= 0;
let intervalId;

document.getElementById("startBtn").onclick = function() {
    clickcounter++
    if(clickcounter > 1){
        return;
    }
    intervalId = setInterval(() => {
        scounter++;
        if (scounter < 10) {
            second.textContent = "0" + scounter;
        } else {
            second.textContent = scounter;
        }
        if (scounter === 60) {
            scounter = 0;
            mcounter++;
            if (mcounter < 10) {
                minute.textContent = "0" + mcounter;
            } else {
                minute.textContent = mcounter;
            }
        }
        if (mcounter === 60) {
            mcounter = 0;
            hcounter++;
            if (hcounter < 10) {
                hour.textContent = "0" + hcounter;
            } else {
                hour.textContent = hcounter;
            }
        }
    }, 1000);
    
};

document.getElementById("stopBtn").onclick = function(){
    clearInterval(intervalId);
    clickcounter = 0;
};

document.getElementById("resetBtn").onclick = function(){
    hour.textContent = "00"
    minute.textContent = "00"
    second.textContent = "00"
    scounter = 0;
    mcounter = 0;
    hcounter = 0;
    clickcounter = 0;
    clearInterval(intervalId)
};