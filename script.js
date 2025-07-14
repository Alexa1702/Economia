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

  { nombre: "Microeconomía II", semestre: 3, creditos: 4, prereq: ["Introducción a la Microeconomía"] },
  { nombre: "Macroeconomía I", semestre: 3, creditos: 4, prereq: ["Introducción a la Macroeconomía"] },
  { nombre: "Pensamiento Económico", semestre: 3, creditos: 4, prereq: ["Introducción a la Macroeconomía", "Historia Económica de Colombia"] },
  { nombre: "Álgebra Lineal", semestre: 3, creditos: 4, prereq: ["Cálculo Integral"] },
  { nombre: "Sociología", semestre: 3, creditos: 2 },
  { nombre: "Inglés II", semestre: 3, creditos: 2, prereq: ["Inglés I"] },

  { nombre: "Equilibrio General", semestre: 4, creditos: 4, prereq: ["Macroeconomía II"] },
  { nombre: "Macroeconomía II", semestre: 4, creditos: 4, prereq: ["Macroeconomía I"] },
  { nombre: "Técnicas de Medición Económica", semestre: 4, creditos: 4, prereq: ["Introducción a la Microeconomía"] },
  { nombre: "Estadística I", semestre: 4, creditos: 3, prereq: ["Álgebra Lineal"] },
  { nombre: "Ciencias Políticas", semestre: 4, creditos: 2 },
  { nombre: "Inglés III", semestre: 4, creditos: 3, prereq: ["Inglés II"] },

  { nombre: "Economía Internacional", semestre: 5, creditos: 4, prereq: ["Microeconomía II", "Macroeconomía II"] },
  { nombre: "Crecimiento Económico", semestre: 5, creditos: 4, prereq: ["Macroeconomía II"] },
  { nombre: "Estadística II", semestre: 5, creditos: 3, prereq: ["Estadística I"] },
  { nombre: "Matemáticas Financieras", semestre: 5, creditos: 3 },
  { nombre: "Epistemología y Metodología de la Economía", semestre: 5, creditos: 4 },

  { nombre: "Economía Política", semestre: 6, creditos: 4, prereq: ["Pensamiento Económico"] },
  { nombre: "Desarrollo Económico", semestre: 6, creditos: 4, prereq: ["Macroeconomía II"] },
  { nombre: "Econometría", semestre: 6, creditos: 4, prereq: ["Estadística II"] },
  { nombre: "Finanzas", semestre: 6, creditos: 3, prereq: ["Matemáticas Financieras"] },
  { nombre: "Electiva Área Socio-Humanística", semestre: 6, creditos: 3 },

  { nombre: "Política Económica", semestre: 7, creditos: 4, prereq: ["Desarrollo Económico", "Crecimiento Económico"] },
  { nombre: "Electiva Disciplinar #1", semestre: 7, creditos: 4 },
  { nombre: "Electiva Disciplinar #2", semestre: 7, creditos: 4 },
  { nombre: "Formulación de Proyectos", semestre: 7, creditos: 3, prereq: ["Finanzas"] },
  { nombre: "Electiva Socio-Humanística II", semestre: 7, creditos: 3 },

  { nombre: "Seminario Economía Colombiana", semestre: 8, creditos: 4, prereq: ["Política Económica", "Desarrollo Económico"] },
  { nombre: "Electiva Disciplinar #3", semestre: 8, creditos: 4 },
  { nombre: "Seminario de Monografía", semestre: 8, creditos: 3 },
  { nombre: "Evaluación de Proyectos", semestre: 8, creditos: 4, prereq: ["Formulación de Proyectos"] },
  { nombre: "Electiva Socio-Humanística III", semestre: 8, creditos: 3 },

  { nombre: "Seminario Recursos Naturales y Medio Ambiente", semestre: 9, creditos: 3 },
  { nombre: "Seminario Desarrollo Local y Regional", semestre: 9, creditos: 3 },
  { nombre: "Seminario Estudios del Desarrollo", semestre: 9, creditos: 3 },
  { nombre: "Seminario Economía Regional y Urbana", semestre: 9, creditos: 3 },
  { nombre: "Seminario Mercado de Capitales", semestre: 9, creditos: 3 },
  { nombre: "Seminario Finanzas Internacionales", semestre: 9, creditos: 3 },
  { nombre: "Seminario Gerencia Financiera", semestre: 9, creditos: 3 },
  { nombre: "Seminario Finanzas Públicas", semestre: 9, creditos: 3 },
  { nombre: "Constitución Política de Colombia", semestre: 9, creditos: 2 },
];

new Set();

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

document.addEventListener('DOMContentLoaded', renderMalla);
