let milliseconds = 0;  
let seconds = 0;       
let minutes = 0;       
let hours = 0;
let interval = null;

function updateDisplay() {
    const pad = (val, digits = 2) => val.toString().padStart(digits, '0');
    document.getElementById("display").textContent =
        `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds, 2)}`;  // Fixed: 2 digits for ms
}

function startTimer() {
    if (interval) return;
    
    document.getElementById("start_btn").disabled = true;
    document.getElementById("stop_btn").disabled = false;

    interval = setInterval(() => {
        milliseconds += 10;

        if (milliseconds === 1000) {
            milliseconds = 0;
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
        }
        updateDisplay();
    }, 10);
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
    
    document.getElementById("start_btn").disabled = false;
    document.getElementById("stop_btn").disabled = true;
}

function resetTimer() {
    clearInterval(interval);
    interval = null;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    
    document.getElementById("start_btn").disabled = false;
    document.getElementById("stop_btn").disabled = true;
    
    updateDisplay();
}

updateDisplay();