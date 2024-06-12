const dropdownValue = document.querySelectorAll(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownItems = document.querySelectorAll(".dropdown__link")

dropdownValue.forEach((button) => {
    button.addEventListener('click', () => {
        dropdownList.classList.add("dropdown__list_active");
        dropdownItems.forEach(item => {
            item.addEventListener('click', (event) => {
                button.textContent = item.textContent;
                dropdownList.classList.remove("dropdown__list_active");
                event.preventDefault();
            })
        })
    })
});