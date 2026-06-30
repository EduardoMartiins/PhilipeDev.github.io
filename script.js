console.log("Landing page Philipe Dev carregada com sucesso.");

const cursorGlow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (event) => {
    if (!cursorGlow) return;

    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
});

window.addEventListener("mouseleave", () => {
    if (!cursorGlow) return;

    cursorGlow.style.opacity = "0";
});

window.addEventListener("mouseenter", () => {
    if (!cursorGlow) return;

    cursorGlow.style.opacity = "1";
});

const revealElements = document.querySelectorAll(
    ".section, .card, .portfolio-card, .price-card, .step-card, .cta, .launch-offer, .briefing-grid article"
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
});

const revealOnScroll = () => {
    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 90) {
            element.classList.add("active");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);