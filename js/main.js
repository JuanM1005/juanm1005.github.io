const botonMenu = document.getElementById('sidebarToggle');
const menuDesplegable = document.getElementById('mobileMenu');
const enlacesMenu = document.querySelectorAll('.mobile-nav-links a');
const iconoMenu = botonMenu.querySelector('i');

if (botonMenu && menuDesplegable) {
    botonMenu.addEventListener('click', () => {
        // 'toggle' alterna, quita la clase si esta, de lo contrario la asigna
        // (en el css esta definida con display flex, lo que hara sera mostrar el menu)
        menuDesplegable.classList.toggle('active');

        // Cuando aparece el menu desplegable, el icono ☰ pasa a ser ✖, cambiando la clase del icono
        if (menuDesplegable.classList.contains('active')) {
            iconoMenu.classList.remove('fa-bars');
            iconoMenu.classList.add('fa-xmark');
        } else {
            iconoMenu.classList.remove('fa-xmark');
            iconoMenu.classList.add('fa-bars');
        }
    });

    // Al dar click en una seccion del menu, este se oculta y el icono se resetea a ☰
    enlacesMenu.forEach(link => {
        link.addEventListener('click', () => {
            menuDesplegable.classList.remove('active');
            iconoMenu.classList.remove('fa-xmark');
            iconoMenu.classList.add('fa-bars');
        });
    });
};

// Quitar el focus de un boton al tocar en otro lado de la pantalla
document.addEventListener('click', (e) => {
    const activo = document.activeElement; // Obtiene el elemento que tiene el focus

    // Si el elemento enfocado es un botón y se hizo click fuera de botones
    if (activo && activo.tagName === 'BUTTON' && !e.target.closest('button')) {
        activo.blur(); // quita el focus
    }
});

