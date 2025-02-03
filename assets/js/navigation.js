// Evitar que los enlaces con href="#" vuelvan al inicio
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
    });
});

// Manejar navegación interna con desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
