const buttons = document.querySelectorAll(".category-btn");
const sections = document.querySelectorAll(".gallery-section");
const backButtons = document.querySelectorAll(".back-btn");

//Mostrar sección al hacer clic
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-target");

        sections.forEach(sec => sec.style.display = "none");

        document.getElementById(target).style.display = "block";
    });
});

//Abrir imagen en modal con fondo oscuro 
document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {

        //Crear overlay
        const overlay = document.createElement("div");
        overlay.className = "image-overlay";

        //Imagen dentro del overlay
        const bigImg = document.createElement("img");
        bigImg.src = img.src;

        //Botón cerrar
        const closeBtn = document.createElement("button");
        closeBtn.innerText = "Cerrar imagen";
        closeBtn.className = "close-overlay-btn";

        //Cerrar al presionar el botón
        closeBtn.addEventListener("click", () => {
            overlay.remove();
        });

        //Insertar elementos
        overlay.appendChild(bigImg);
        overlay.appendChild(closeBtn);

        document.body.appendChild(overlay);
    });
});