document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar elementos del DOM
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const menuIcon = menuToggle.querySelector('i');
    
    // Función para alternar el menú
    function toggleMenu() {
        // Alternar la clase 'active' en el menú
        navMenu.classList.toggle('active');
        
        // Cambiar el icono entre hamburguesa y X
        if (navMenu.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        } else {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    }
    
    // Evento click para el botón del menú
    menuToggle.addEventListener('click', toggleMenu);
    
    // Cerrar el menú al hacer clic en un enlace (para móviles)
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // Solo cerrar el menú si está en vista móvil (ancho <= 768px)
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });
    });
});