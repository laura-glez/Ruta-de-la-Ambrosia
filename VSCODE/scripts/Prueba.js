window.addEventListener('scroll', function() {
  const scrolled = window.scrollY;
  const background = document.getElementById('parallax-bg');
  // Ajusta la velocidad cambiando el divisor (e.g. 2 para más lento, 0.5 para más rápido)
  background.style.transform = 'translateY(' + scrolled * 2 + 'px)';
});
