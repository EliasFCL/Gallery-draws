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

// --- Ampliar imagen con botón cerrar ---

document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {

        // Si ya está ampliada, no volver a crear botón
        if (img.classList.contains("expanded")) return;

        // Añadir clase de imagen ampliada
        img.classList.add("expanded");

        // Crear el botón de cerrar
        const closeBtn = document.createElement("button");
        closeBtn.innerText = "Cerrar imagen";
        closeBtn.className = "close-image-btn";

        // Insertar botón después de la imagen
        img.insertAdjacentElement("afterend", closeBtn);

        // Acción del botón cerrar
        closeBtn.addEventListener("click", () => {
            img.classList.remove("expanded");
            closeBtn.remove();
        });
    });
});