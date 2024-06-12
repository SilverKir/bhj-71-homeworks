const clicker = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
const clickSpeed = document.getElementById("clicker__speed");

var countClicker = parseInt(clicker.textContent);
var initialDate = new Date();
var initialTime = initialDate.getSeconds() * 1000 + initialDate.getMilliseconds();

cookie.onclick = () => {
    cookie.width = cookie.width == 200 ? 180 : 200;
    var currentDate = new Date()
    var carrentTime = currentDate.getSeconds() * 1000 + currentDate.getMilliseconds();
    clickSpeed.textContent = (1000 / (carrentTime - initialTime)).toFixed(2);
    initialTime = carrentTime;
    countClicker++;
    clicker.textContent = countClicker;
}
