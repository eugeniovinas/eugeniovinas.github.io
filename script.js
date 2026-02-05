// CONFIGURACIÓN DE PROYECTOS
const projects = [
    {
        title: "València Destroy",
        category: "podcast",
        tag: "Podium Podcast / Serie Documental",
        description: "La historia sonora de la Ruta del Bakalao. Un viaje premiado a la memoria del Mediterráneo.",
        image: "https://www.podiumpodcast.com/wp-content/uploads/2017/10/VALENCIA-DESTROY_1400x1400.jpg",
        link: "https://www.podiumpodcast.com/podcasts/valencia-destroy-podium-os/"
    },
    {
        title: "Entrevista a Ger",
        category: "prensa",
        tag: "El País / Entrevista",
        description: "Charla profunda sobre el éxito, la fama digital y la importancia de la salud mental.",
        image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=800",
        link: "https://elpais.com/autor/eugenio-vinas-serrano/"
    },
    {
        title: "Editor en Prisa Audio",
        category: "podcast",
        tag: "Producción / Creatividad",
        description: "Coordinación y desarrollo de nuevos formatos sonoros para Podium Podcast.",
        image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800",
        link: "#"
    }
];

// LÓGICA DE LA WEB
const grid = document.getElementById('portfolio-grid');

function render(filter = 'all') {
    grid.innerHTML = "";
    projects.forEach(p => {
        if (filter === 'all' || p.category === filter) {
            grid.innerHTML += `
                <a href="${p.link}" class="project-card" target="_blank">
                    <img src="${p.image}" class="project-img" alt="${p.title}">
                    <span class="tag">${p.tag}</span>
                    <h2>${p.title}</h2>
                    <p>${p.description}</p>
                </a>
            `;
        }
    });
}

// MÁQUINA DE ESCRIBIR
const phrases = ["host de podcasts.", "editor creativo.", "periodista cultural."];
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
        setTimeout(type, 2000);
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % phrases.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}

// BOTONES DE FILTRO
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        render(e.target.dataset.filter);
    });
});

// ARRANCAR
window.onload = () => {
    type();
    render();
};
