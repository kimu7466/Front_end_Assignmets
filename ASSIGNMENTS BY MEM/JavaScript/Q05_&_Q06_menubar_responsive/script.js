function showMenu() {
    let icon = document.querySelector("#icon");
    let nav = document.querySelector(".options");
    nav.classList.toggle("show-nav");

    if (nav.classList.contains("show-nav")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } 
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
}

var head = document.querySelector("header");
window.addEventListener("scroll", () => {
    var current = window.scrollY;
    if (current > 0) {
        head.classList.add("header-change");
    } 
    else {
        head.classList.remove("header-change");
    }
});
