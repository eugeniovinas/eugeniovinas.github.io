// --- EFECTO DE ESCRITURA (TYPEWRITER) ---
const phrases = ["host de podcasts.", "productor de contenidos.", "periodista cultural."];
let i = 0, j = 0, isDeleting = false;
const target = document.getElementById('typewriter');

function type() {
    let current = phrases[i];
    if (isDeleting) {
        target.textContent = current.substring(0, j--);
    } else {
        target.textContent = current.substring(0, j++);
    }

    if (!isDeleting && j > current.length) {
        isDeleting = true;
        setTimeout(type, 2000); // Pausa cuando termina de escribir
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % phrases.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}

// --- TU PORFOLIO (Aquí es donde añades tus trabajos) ---
// Para poner una imagen real, cambia el link de "image" por el tuyo.
const projects = [
    {
        title: "Podcast de Éxito",
        tag: "Audio / Producción",
        description: "Dirección y guion de la serie sonora. Un hito en la producción cultural reciente.",
        image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800", // Ejemplo de imagen
        link: "#"
    },
    {
        title: "Colaboración en Televisión",
        tag: "TV / Análisis",
        description: "Participación habitual en programas de debate y actualidad cultural.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800", // Ejemplo de imagen
        link: "#"
    }
];

// --- CARGAR LOS PROYECTOS EN LA WEB ---
const grid = document.getElementById('portfolio-grid');

function renderProjects() {
    grid.innerHTML = ""; // Limpiamos la rejilla
    projects.forEach(p => {
        grid.innerHTML += `
            <a href="${p.link}" class="project-card">
                <img src="${p.image}" class="project-img" alt="${p.title}">
                <span class="tag">${p.tag}</span>
                <h2>${p.title}</h2>
                <p>${p.description}</p>
            </a>
        `;
    });
}

// Iniciamos todo
type();
renderProjects();
