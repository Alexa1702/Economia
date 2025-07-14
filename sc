const cursos = [
  // Copiado directamente desde el index
];

const aprobados = new Set();

function renderMalla() {
  const contenedor = document.getElementById('malla');
  contenedor.innerHTML = '';

  cursos.forEach(curso => {
    const bloque = document.createElement('div');
    bloque.classList.add('curso');

    const desbloqueado = (curso.prereq || []).every(pr => aprobados.has(pr));
    if (!desbloqueado) {
      bloque.classList.add('locked');
    }
    if (aprobados.has(curso.nombre)) {
      bloque.classList.add('aprobado');
    }

    bloque.innerHTML = `
      <h3>${curso.nombre}</h3>
      <p>Semestre: ${curso.semestre}</p>
      <p class="creditos">Créditos: ${curso.creditos}</p>
    `;

    if (desbloqueado) {
      bloque.addEventListener('click', () => {
        if (aprobados.has(curso.nombre)) {
          aprobados.delete(curso.nombre);
        } else {
          aprobados.add(curso.nombre);
        }
        renderMalla();
      });
    }

    contenedor.appendChild(bloque);
  });
}

renderMalla();
