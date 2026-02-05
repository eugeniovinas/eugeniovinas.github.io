:root {
    --bg: #ffffff;
    --text: #002d5a; /* Tu azul oscuro */
    --gray: #555;
    --border: #f0f0f0;
}

body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background-color: var(--bg);
    color: var(--text);
    line-height: 1.6;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 6%;
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 0;
    background: white;
    z-index: 100;
}

.logo {
    font-family: 'IBM Plex Serif', serif;
    font-weight: 600;
    font-size: 1.2rem;
}

/* Filtros */
.filter-btn {
    background: none;
    border: none;
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-left: 20px;
    cursor: pointer;
    color: #aaa;
    transition: 0.3s;
}

.filter-btn.active { color: var(--text); font-weight: 600; }

/* Hero */
.hero {
    padding: 80px 6%;
    max-width: 900px;
}

.hero h1 {
    font-family: 'IBM Plex Serif', serif;
    font-size: clamp(2.5rem, 6vw, 4rem);
    margin-bottom: 20px;
}

/* Rejilla */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 1px;
    background-color: var(--border);
}

.project-card {
    background-color: white;
    padding: 60px 10%;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
}

.project-card:hover { background-color: #f9fbfd; }

/* Imagen del proyecto */
.project-img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    margin-bottom: 30px;
    background-color: #eee;
    display: block;
}

/* Si no hay imagen, un estilo más sobrio para entrevistas */
.no-img { aspect-ratio: auto; padding-top: 20px; border-top: 3px solid var(--text); }

.tag { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; color: var(--gray); margin-bottom: 10px; }

.project-card h2 { font-family: 'IBM Plex Serif', serif; font-size: 1.8rem; margin: 10px 0; }

.project-card p { font-size: 1rem; color: var(--gray); }

@media (max-width: 768px) {
    .navbar { flex-direction: column; gap: 20px; }
    .grid { grid-template-columns: 1fr; }
}
