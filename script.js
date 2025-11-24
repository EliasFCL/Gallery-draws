const buttons = document.querySelectorAll(".category-btn");
const sections = document.querySelectorAll(".gallery-section");
const backButtons = document.querySelectorAll(".back-btn");

// Mostrar sección al hacer clic
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-target");

        sections.forEach(sec => sec.style.display = "none");

        document.getElementById(target).style.display = "block";
    });
});

// Botón volver
backButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        sections.forEach(sec => sec.style.display = "none");
    });
});