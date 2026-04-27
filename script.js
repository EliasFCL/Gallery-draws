const buttons = document.querySelectorAll(".category-btn");
const sections = document.querySelectorAll(".gallery-section");
const backButtons = document.querySelectorAll(".back-btn");

// Fechas de creación de las imágenes
const imageDates = {
    "Anime/Bardock UI.jpg": "19/11/2024",
    "Anime/Moro UI.jpg": "17/11/2024",
    "Anime/Garou.jpg": "25/11/2024",
    "Anime/Goku and Vegeta.png": "14/03/2023",
    "Anime/Kukushibou + Sukuna.png": "16/11/2023",
    "Anime/Hitokiri Batoosai.png": "07/01/2026",
    "Anime/Goku vs Jiren.jpg": "13/03/2023",
    "Anime/Sukuna.jpg": "12/06/2022",
    "Anime/Maki Zenin.jpg": "01/02/2026",
    "Anime/SSJ's.jpg": "28/02/2026",
    "Games/RE3.jpg": "06/10/2026",
    "Games/Sekiro.jpg": "13/09/2026",
    "Games/Red dead.png": "19/10/2025",
    "Games/InfamousSS.jpg": "07/07/2025",
    "Games/BloodBorne.jpg": "17/02/2025",
    "Games/God Eater 3.png": "28/08/2025",
    "Games/Lies of P.png": "09/11/2025",
    "Games/Monster Hunter.png": "25/11/2022",
    "Games/Dark Souls.png": "24/04/2026",
    "Otro/Claire.jpg": "19/06/2023",
    "Otro/Zamael.jpg": "22/03/2025",
    "Otro/Ben Really.png": "23/08/2023",
    "Otro/Fenrir.png": "09/01/2024",
    "Otro/Black Canary.jpg": "15/01/2025",
    "Otro/RIP Toriyama.jpg": "07/03/2024",
    "Otro/Pennywise.jpeg": "20/01/2026",
    "Otro/ZamaelGG-Banner.jpeg": "08/02/2026",
    "Otro/RascaBanner.jpeg": "17/11/2024"
};

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

        //Texto de fecha
        const src = img.getAttribute("src");
        const date = imageDates[src] || "Fecha desconocida";
        const dateText = document.createElement("p");
        dateText.textContent = "Fecha de creación: " + date;
        dateText.style.color = "white";
        dateText.style.fontSize = "18px";
        dateText.style.marginTop = "10px";

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
        overlay.appendChild(dateText);
        overlay.appendChild(closeBtn);

        document.body.appendChild(overlay);
    });
});