// Animación de subtítulos
const subtitles = [
  "El amor a distancia puede ser más fuerte que cualquier obstáculo.",
  "La distancia solo nos enseña a amarnos más profundamente.",
  "Cada mensaje es un abrazo, cada llamada, una caricia."
];

let index = 0;
let letterIndex = 0;

function typeSubtitle() {
  if (index < subtitles.length) {
    const currentSubtitle = subtitles[index];
    document.getElementById('subtitle' + (index + 1)).textContent = currentSubtitle.slice(0, letterIndex);
    if (letterIndex < currentSubtitle.length) {
      letterIndex++;
      setTimeout(typeSubtitle, 100);
    } else {
      index++;
      letterIndex = 0;
      setTimeout(typeSubtitle, 1000);
    }
  }
}

typeSubtitle();
