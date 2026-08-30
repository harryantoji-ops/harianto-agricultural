// =========================
// SCROLL ANIMATION
// =========================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }

    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// =========================
// DARK / LIGHT MODE
// =========================

const themeButton = document.getElementById("theme-btn");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeButton.textContent = "🌙";
    } else {
        themeButton.textContent = "☀️";
    }

});