let prevScrollpos = window.pageYOffset;
const navbar = document.getElementById("navbar");
const scrollUpBtn = document.getElementById("scrollUpBtn");

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;

    if (currentScrollPos > 300) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
};

scrollUpBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});