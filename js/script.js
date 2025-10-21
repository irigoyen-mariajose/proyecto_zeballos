document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    

    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('open');
    });

    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(event.target) && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
            }
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('open');
        }
    });

    // Función para voltear las tarjetas en Proceso.html
    window.flipCard = function(card) {
        card.classList.toggle('flipped');
    };
});
