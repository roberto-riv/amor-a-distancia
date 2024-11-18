// Obtener los elementos
const form = document.getElementById('form-carta');
const cartaTexto = document.getElementById('carta-texto');
const listaCartas = document.getElementById('lista-cartas');

// Función para mostrar cartas
function mostrarCartas() {
  listaCartas.innerHTML = '';
  const cartas = JSON.parse(localStorage.getItem('cartas')) || [];
  
  cartas.forEach(carta => {
    const div = document.createElement('div');
    div.classList.add('post');
    div.innerHTML = `<p><strong>${carta.fecha}</strong></p><p>${carta.texto}</p>`;
    listaCartas.appendChild(div);
  });
}

// Función para manejar el envío del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Obtener el texto de la carta
  const texto = cartaTexto.value.trim();
  
  if (texto) {
    const cartas = JSON.parse(localStorage.getItem('cartas')) || [];
    const fecha = new Date().toLocaleString();
    
    cartas.push({ texto, fecha });
    localStorage.setItem('cartas', JSON.stringify(cartas));
    
    // Limpiar el formulario
    cartaTexto.value = '';
    
    // Actualizar la lista de cartas
    mostrarCartas();
  }
});

// Mostrar las cartas al cargar la página
mostrarCartas();
