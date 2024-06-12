const getHole = index => document.getElementById(`hole${index}`);
const getDead = document.getElementById("dead");
const getLost = document.getElementById("lost");

var initialIndex = 0;

function doubleClick(index) {
    if (index != initialIndex) {
        initialIndex = index;
        return false;
    } else {
        return true;
    }
}

for (let index = 1; index < 10; index++) {
    getHole(index).onclick = () => {
        if (getHole(index).className.includes('hole_has-mole') && (!doubleClick(index))) {
            getDead.textContent++;
        } else if (!getHole(index).className.includes('hole_has-mole')) {
            getLost.textContent++;
        }

        if (getDead.textContent == 10) {
            alert("Победа!");
            getDead.textContent = 0;
            getLost.textContent = 0;
        }

        if (getLost.textContent == 5) {
            alert("Вы проиграли");
            getDead.textContent = 0;
            getLost.textContent = 0;
        }
    }
}