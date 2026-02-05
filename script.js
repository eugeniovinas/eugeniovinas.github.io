const phrases = ["productor de contenidos.", "host de podcasts.", "periodista cultural."];
let i = 0, j = 0, isDeleting = false;
const target = document.getElementById('typewriter');

function type() {
    let current = phrases[i];
    target.textContent = isDeleting ? current.substring(0, j--) : current.substring(0, j++);
    if (!isDeleting && j > current.length) { isDeleting = true; setTimeout(type, 2000); }
    else if (isDeleting && j === 0) { isDeleting = false; i = (i + 1) % phrases.length; setTimeout(type, 500); }
    else { setTimeout(type, isDeleting ? 50 : 100); }
}

const projects = [
    { title: "Podcast de Éxito", tag: "Audio", description: "Descripción de tu gran proyecto.", link: "#" },
    { title: "Colaboración en TV", tag: "Televisión", description: "Tu paso por programas habituales.", link: "#" }
];

const grid = document.getElementById('portfolio-grid');
projects.forEach(p => {
    grid.innerHTML += `<a href="${p.link}" class="project-card"><span class="tag">${p.tag}</span><h2>${p.title}</h2><p>${p.description}</p></a>`;
});
type();
