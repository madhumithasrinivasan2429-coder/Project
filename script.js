// =============================
// LOADER
// =============================
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1000);
});

// =============================
// AOS ANIMATION
// =============================
AOS.init({
    duration: 1000,
    once: true
});

// =============================
// TYPING EFFECT
// =============================
var typed = new Typed("#typing", {
    strings: [
        "AI & Data Science Student",
        "Web Developer",
        "UI/UX Designer",
        "Machine Learning Enthusiast"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});

// =============================
// BACK TO TOP BUTTON
// =============================
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// =============================
// ACTIVE NAV LINK
// =============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// =============================
// SMOOTH SCROLL
// =============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// =============================
// NAVBAR BACKGROUND
// =============================
window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.background = "rgba(7,19,48,0.95)";

    } else {

        nav.style.background = "rgba(7,19,48,0.6)";

    }

});

// =============================
// IMAGE HOVER EFFECT
// =============================
const images = document.querySelectorAll(".project-card img");

images.forEach(img => {

    img.addEventListener("mouseover", () => {

        img.style.transform = "scale(1.1)";

    });

    img.addEventListener("mouseout", () => {

        img.style.transform = "scale(1)";

    });

});

// =============================
// CONTACT FORM
// =============================
const form = document.querySelector("form");

if(form){

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    form.reset();

});

}

// =============================
// SCROLL REVEAL EFFECT
// =============================
const cards = document.querySelectorAll(
    ".glass-card, .skill-card, .project-card, .timeline-item"
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>{
    observer.observe(card);
});

// =============================
// PROFILE IMAGE FLOAT
// =============================
const profile = document.querySelector(".profile-card");

if(profile){

setInterval(()=>{

    profile.classList.toggle("float");

},2000);

}

// =============================
// CONSOLE MESSAGE
// =============================
console.log("Portfolio Loaded Successfully 🚀");