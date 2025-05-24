// Formulario de contacto
document.getElementById('form-cita').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias! Tu solicitud de cita ha sido enviada. Nos pondremos en contacto contigo pronto.');
    this.reset();
});

// Efecto smooth scroll para enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});