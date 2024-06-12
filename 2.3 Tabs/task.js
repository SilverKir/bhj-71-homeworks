const tabNames = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".tab__content");

tabNames.forEach((tabs, index) => {
    tabs.addEventListener('click', () => {
        tabNames.forEach(element => {
            element.classList.remove("tab_active");
        });

        tabContent.forEach(content => {
            content.classList.remove("tab__content_active");
        });

        tabs.classList.add("tab_active");
        tabContent.item(index).classList.add("tab__content_active");
    });

});