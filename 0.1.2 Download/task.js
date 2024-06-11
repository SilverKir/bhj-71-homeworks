
const startTimer = document.getElementById("timer").textContent;

const timerResult = () => {
    location.assign("https://egov-buryatia.ru/rsbpn/okhota/instruktsii/Методичка%20по%20подаче%20заявлений%20через%20РПГУ.docx");
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