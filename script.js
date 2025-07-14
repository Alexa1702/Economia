const cursos = [
  { nombre: "Introducción a la Microeconomía", semestre: 1, creditos: 4 },
  { nombre: "Historia Económica General", semestre: 1, creditos: 4 },
  { nombre: "Cálculo Diferencial", semestre: 1, creditos: 4 },
  { nombre: "Taller de Lectura y Redacción", semestre: 1, creditos: 2 },
  { nombre: "Formación Estética o Deporte", semestre: 1, creditos: 4 },
  { nombre: "Introducción a la Macroeconomía", semestre: 2, creditos: 4, prereq: ["Introducción a la Microeconomía"] },
  { nombre: "Historia Económica de Colombia", semestre: 2, creditos: 4, prereq: ["Historia Económica General"] },
  { nombre: "Cálculo Integral", semestre: 2, creditos: 4, prereq: ["Cálculo Diferencial"] },
  { nombre: "Ética", semestre: 2, creditos: 2 },
  { nombre: "Inglés I", semestre: 2, creditos: 2 },
  // Resto del contenido omitido para brevedad...
];

const aprobados = new Set();

function renderMalla() {
  const contenedor = document.getElementById('malla');
  contenedor.innerHTML = '';

  const porSemestre = {};
  cursos.forEach(curso => {
    if (!porSemestre[curso.semestre]) {
      porSemestre[curso.semestre] = [];
    }
    porSemestre[curso.semestre].push(curso);
  });

  Object.keys(porSemestre).sort((a, b) => a - b).forEach(semestre => {
    const bloqueSemestre = document.createElement('div');
    bloqueSemestre.classList.add('semestre');
    const titulo = document.createElement('h2');
    titulo.textContent = `Semestre ${semestre}`;
    bloqueSemestre.appendChild(titulo);

    porSemestre[semestre].forEach(curso => {
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

      bloqueSemestre.appendChild(bloque);
    });

    contenedor.appendChild(bloqueSemestre);
  });
}

document.addEventListener('DOMContentLoaded', renderMalla);
