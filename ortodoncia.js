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

            // Si es válido, mostrar mensaje
            if(valid) {
                const btn = form.querySelector('button');
                btn.textContent = 'Enviando...';
                btn.disabled = true;

                setTimeout(() => {
                    alert('Consulta de ortodoncia enviada. ¡Te contactaremos pronto!');
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
        setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }, 200 * i);
    });
});