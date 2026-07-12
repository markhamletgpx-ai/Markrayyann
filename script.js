// Dark Mode Toggle
const darkModeBtn = document.getElementById("darkMode");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkModeBtn.innerHTML = "☀️";
    } else {
        darkModeBtn.innerHTML = "🌙";
    }
});

// Explore Button Scroll
function scrollToBooks() {
    document.getElementById("books").scrollIntoView({
        behavior: "smooth"
    });
}

// Fade-in Animation on Scroll
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.8s ease";
    observer.observe(card);
});

// Welcome Message
window.addEventListener("load", () => {
    console.log("Welcome to MarkRayyan!");
});
