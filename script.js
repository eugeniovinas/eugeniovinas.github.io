<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2575.7">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">// CONFIGURACIÓN DEL TYPEWRITER</p>
<p class="p1">const phrases = ["productor de contenidos.", "host de podcasts.", "periodista cultural."];</p>
<p class="p1">let i = 0, j = 0, isDeleting = false;</p>
<p class="p1">const target = document.getElementById('typewriter');</p>
<p class="p2"><br></p>
<p class="p1">function type() {</p>
<p class="p1"><span class="Apple-converted-space">    </span>let current = phrases[i];</p>
<p class="p1"><span class="Apple-converted-space">    </span>target.textContent = isDeleting ? current.substring(0, j--) : current.substring(0, j++);</p>
<p class="p1"><span class="Apple-converted-space">    </span>if (!isDeleting &amp;&amp; j &gt; current.length) { isDeleting = true; setTimeout(type, 2000); }</p>
<p class="p1"><span class="Apple-converted-space">    </span>else if (isDeleting &amp;&amp; j === 0) { isDeleting = false; i = (i + 1) % phrases.length; setTimeout(type, 500); }</p>
<p class="p1"><span class="Apple-converted-space">    </span>else { setTimeout(type, isDeleting ? 50 : 100); }</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">// TU BASE DE DATOS DE PROYECTOS (ESTO ES LO QUE EDITARÁS)</p>
<p class="p1">const projects = [</p>
<p class="p1"><span class="Apple-converted-space">    </span>{</p>
<p class="p1"><span class="Apple-converted-space">        </span>title: "Nombre del Podcast de Éxito",</p>
<p class="p1"><span class="Apple-converted-space">        </span>category: "podcast",</p>
<p class="p1"><span class="Apple-converted-space">        </span>tag: "Audio / Producción",</p>
<p class="p1"><span class="Apple-converted-space">        </span>description: "Dirección y guion de la serie sonora premiada con un Ondas. Más de 1M de escuchas.",</p>
<p class="p1"><span class="Apple-converted-space">        </span>link: "#"</p>
<p class="p1"><span class="Apple-converted-space">    </span>},</p>
<p class="p1"><span class="Apple-converted-space">    </span>{</p>
<p class="p1"><span class="Apple-converted-space">        </span>title: "Programa de TV Cultural",</p>
<p class="p1"><span class="Apple-converted-space">        </span>category: "tv",</p>
<p class="p1"><span class="Apple-converted-space">        </span>tag: "Televisión / Colaboración",</p>
<p class="p1"><span class="Apple-converted-space">        </span>description: "Análisis semanal de tendencias culturales en el programa de prime time de [Canal].",</p>
<p class="p1"><span class="Apple-converted-space">        </span>link: "#"</p>
<p class="p1"><span class="Apple-converted-space">    </span>},</p>
<p class="p1"><span class="Apple-converted-space">    </span>{</p>
<p class="p1"><span class="Apple-converted-space">        </span>title: "La cultura en la era digital",</p>
<p class="p1"><span class="Apple-converted-space">        </span>category: "prensa",</p>
<p class="p1"><span class="Apple-converted-space">        </span>tag: "Artículo / El País",</p>
<p class="p1"><span class="Apple-converted-space">        </span>description: "Reflexión sobre el impacto de la IA en la creación artística contemporánea.",</p>
<p class="p1"><span class="Apple-converted-space">        </span>link: "#"</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1">];</p>
<p class="p2"><br></p>
<p class="p1">// RENDERIZADO DEL PORFOLIO</p>
<p class="p1">const grid = document.getElementById('portfolio-grid');</p>
<p class="p2"><br></p>
<p class="p1">function displayProjects(filter = 'all') {</p>
<p class="p1"><span class="Apple-converted-space">    </span>grid.innerHTML = "";</p>
<p class="p1"><span class="Apple-converted-space">    </span>projects.forEach(p =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">        </span>if (filter === 'all' || p.category === filter) {</p>
<p class="p1"><span class="Apple-converted-space">            </span>grid.innerHTML += `</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;a href="${p.link}" class="project-card" data-category="${p.category}"&gt;</p>
<p class="p1"><span class="Apple-converted-space">                    </span>&lt;span class="tag"&gt;${p.tag}&lt;/span&gt;</p>
<p class="p1"><span class="Apple-converted-space">                    </span>&lt;h2&gt;${p.title}&lt;/h2&gt;</p>
<p class="p1"><span class="Apple-converted-space">                    </span>&lt;p&gt;${p.description}&lt;/p&gt;</p>
<p class="p1"><span class="Apple-converted-space">                </span>&lt;/a&gt;</p>
<p class="p1"><span class="Apple-converted-space">            </span>`;</p>
<p class="p1"><span class="Apple-converted-space">        </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">// Lógica de los botones de filtro</p>
<p class="p1">document.querySelectorAll('.filter-btn').forEach(btn =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">    </span>btn.addEventListener('click', (e) =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">        </span>document.querySelector('.active').classList.remove('active');</p>
<p class="p1"><span class="Apple-converted-space">        </span>e.target.classList.add('active');</p>
<p class="p1"><span class="Apple-converted-space">        </span>displayProjects(e.target.dataset.filter);</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p1">});</p>
<p class="p2"><br></p>
<p class="p1">// Inicializar</p>
<p class="p1">type();</p>
<p class="p1">displayProjects();</p>
</body>
</html>
