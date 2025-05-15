window.addEventListener('scroll', function() {
  const scrolled = window.scrollY;
  const background = document.getElementById('parallax-bg');
  // Ajusta la velocidad cambiando el divisor (e.g. 2 para más lento, 0.5 para más rápido)
  background.style.transform = 'translateY(' + scrolled * 2 + 'px)';
});


function openLoginPopup(event) {
    event.preventDefault(); // Evita que el enlace realice su acción predeterminada
    document.getElementById('login-popup').style.display = 'flex'; // Muestra el pop-up
}

// Función para cerrar el pop-up
function closeLoginPopup() {
    document.getElementById('login-popup').style.display = 'none'; // Oculta el pop-up
}
