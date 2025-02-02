// Ejemplo de interactividad: Cambiar el color del borde al hacer clic en una tarjeta
document.querySelectorAll('.item-wrapper').forEach(card => {
  card.addEventListener('click', () => {
    card.style.borderColor = '#40169C';
  });
});
