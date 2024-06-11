
const startTimer = document.getElementById("timer").textContent;

function timerSplit(timerData) {
    var initialTime = timerData.split(':');
    for (let i = 0; i < initialTime.length; i++) {
        initialTime[i] = parseInt(initialTime[i]);
    }
    return initialTime
}

var currentTime = timerSplit(startTimer);

const timerResult = () => {
    alert("Вы победили в конкурсе!");
}

const setTimeData = (timeArray) => {
    let timeData = '';
    if (timeArray[0] > 9) {
        timeData = timeData + timeArray[0];
    } else {
        timeData = timeData + '0' + timeArray[0];
    };
    for (let i = 1; i < timeArray.length; i++) {
        if (timeArray[i] > 9) {
            timeData = timeData + ':' + timeArray[i];
        } else {
            timeData = timeData + ':' + '0' + timeArray[i];
        };
    }
    document.getElementById("timer").textContent = timeData;
}

function countdownStart() {
    if (currentTime[2] > 0) {
        currentTime[2] -= 1;
        setTimeData(currentTime);
    } else {
        if ((currentTime[1] > 0)) {
            currentTime[2] += 59;
            currentTime[1] -= 1;
            setTimeData(currentTime);
        } else {
            if (currentTime[0] > 0) {
                currentTime[1] += 59;
                currentTime[2] += 59;
                currentTime[0] -= 1;
                setTimeData(currentTime);
            } else {
                currentTime = timerSplit(startTimer);
                document.getElementById("timer").textContent = startTimer;
                timerResult();
            }
        }
    }

}

setInterval(countdownStart, 1000);