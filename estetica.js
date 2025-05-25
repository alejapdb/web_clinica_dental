document.addEventListener('DOMContentLoaded', function() {
    // Scroll suave para enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Validación de formulario básica
    const form = document.getElementById('form-cita');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let valid = true;

            // Validar campos requeridos
            form.querySelectorAll('[required]').forEach(input => {
                if(!input.value.trim()) {
                    input.style.borderColor = 'red';
                    valid = false;
                } else {
                    input.style.borderColor = '#ddd';
                }
            });

            // Validar selección de tratamiento
            const tratamiento = form.querySelector('select');
            if(tratamiento && !tratamiento.value) {
                tratamiento.style.borderColor = 'red';
                valid = false;
            }

            // Si es válido, mostrar mensaje
            if(valid) {
                const btn = form.querySelector('button');
                btn.textContent = 'Enviando...';
                btn.disabled = true;

                setTimeout(() => {
                    alert('Consulta sobre implantes enviada. Nuestro especialista te contactará pronto.');
                    form.reset();
                    btn.textContent = 'Solicitar consulta';
                    btn.disabled = false;
                }, 1000);
            }
        });
    }

    // Animación simple para cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, i) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }, 200 * i);
    });
});