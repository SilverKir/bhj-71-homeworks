
const startTimer = document.getElementById("seconds").textContent;
const startMinutes = document.getElementById("minutes").textContent;
const startHours = document.getElementById("hours").textContent;

const timerResult = () => {
    alert("Вы победили в конкурсе!");
}


const decreaseTimer = (param, paramDidit) => {
    output = document.getElementById(param)
    output.textContent -= 1;
    if (output.textContent == 9) {
        document.getElementById(paramDidit).textContent = 0
    }
}

const setTimeData = (param, paramValue, paramDigit) => {
    if (paramValue > 9) {
        document.getElementById(paramDigit).textContent = '';
    } else {
        document.getElementById(paramDigit).textContent = 0;
    }
    document.getElementById(param).textContent = + paramValue;
}

const setInitialTimeData = () => {
    setTimeData("hours", startHours, "hoursZero");
    setTimeData("minutes", startMinutes, "minutesZero");
    setTimeData("seconds", startTimer, "secondsZero");

}

const countdownStart = () => {
    if (document.getElementById("seconds").textContent > 0) {
        decreaseTimer("seconds", "secondsZero")
    } else {
        if ((document.getElementById("minutes").textContent > 0)) {
            setTimeData("seconds", 59, "secondsZero");
            decreaseTimer("minutes", "minutesZero");
        } else {
            if ((document.getElementById("hours").textContent > 0)) {
                setTimeData("seconds", 59, "secondsZero");
                setTimeData("minutes", 59, "minutesZero");
                decreaseTimer("hours", "hoursZero");
            } else {
                setInitialTimeData();
                timerResult();
            }
        }
    }

}

setInitialTimeData();
setInterval(countdownStart, 1000);