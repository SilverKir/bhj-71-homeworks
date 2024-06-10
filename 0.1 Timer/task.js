
const startTimer = document.getElementById("timer").textContent;

const timerResult = () => {
    alert("Вы победили в конкурсе!");
}

const decreaseTimer = () => {
    output = document.getElementById("timer")
    if (output.textContent > 0) {
        output.textContent -= 1;
    } else {
        output.textContent = startTimer;
        timerResult();
    }
}

setInterval(decreaseTimer, 1000)