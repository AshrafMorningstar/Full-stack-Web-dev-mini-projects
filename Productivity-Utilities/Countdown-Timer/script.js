
let totalSeconds = 0;
let interval = null;

function startTimer() {
    if (interval) return;
    
    if (totalSeconds === 0) {
        const hours = parseInt(document.getElementById('hours').value) || 0;
        const minutes = parseInt(document.getElementById('minutes').value) || 0;
        const seconds = parseInt(document.getElementById('seconds').value) || 0;
        totalSeconds = hours * 3600 + minutes * 60 + seconds;
    }
    
    if (totalSeconds === 0) {
        alert('Please set a time');
        return;
    }
    
    interval = setInterval(() => {
        totalSeconds--;
        updateDisplay();
        
        if (totalSeconds === 0) {
            clearInterval(interval);
            interval = null;
            alert('Time is up!');
        }
    }, 1000);
}

function pauseTimer() {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
}

function resetTimer() {
    pauseTimer();
    totalSeconds = 0;
    document.getElementById('hours').value = 0;
    document.getElementById('minutes').value = 1;
    document.getElementById('seconds').value = 0;
    updateDisplay();
}

function updateDisplay() {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    document.getElementById('display').textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
