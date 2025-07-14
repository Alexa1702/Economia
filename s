body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #fdf6f0;
  margin: 0;
  padding: 2rem;
}

h1 {
  text-align: center;
  color: #555;
  margin-bottom: 2rem;
}

#malla {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}

.curso {
  background-color: #d8e2dc;
  border: 2px solid #a3b18a;
  border-radius: 12px;
  padding: 1rem;
  cursor: pointer;
  transition: 0.3s ease all;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
}

.curso:hover {
  transform: scale(1.03);
  background-color: #e9edc9;
}

.curso.aprobado {
  background-color: #b5ead7;
  border-color: #76c893;
  text-decoration: line-through;
}

.curso.locked {
  background-color: #f5eaea;
  border-color: #ccc;
  opacity: 0.6;
  cursor: not-allowed;
}

.curso h3 {
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
}

.curso p {
  margin: 0;
  font-size: 0.9rem;
  color: #333;
}

.curso .creditos {
  font-weight: bold;
  font-size: 0.85rem;
  color: #555;
  margin-top: 0.5rem;
}
