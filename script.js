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