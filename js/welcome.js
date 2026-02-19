document.addEventListener('DOMContentLoaded', () => {
    const enterBtn = document.getElementById('enterBtn');

    if (!enterBtn) return;

    enterBtn.addEventListener('click', () => {
        // Añadimos la clase para el efecto de salida
        document.body.classList.add('fade-out');

        // Pequeño retraso para permitir que la animación se vea antes de cambiar de página
        setTimeout(() => {
            window.location.href = "main.html"; // Dirige a la página princiap
        }, 500);
    });
});

/**
 * Este evento es crucial para solucionar el problema del botón "Atrás".
 * Ya que el focus quedaba activo en movil
 * Se dispara cada vez que la página se vuelve visible.
 */
window.addEventListener('pageshow', (event) => {
    // La propiedad persisted es true si la página se carga desde el caché del navegador (botón atrás)
    if (event.persisted || document.body.classList.contains('fade-out')) {
        // Eliminamos la clase que oculta el contenido
        document.body.classList.remove('fade-out');

        // Forzamos un re-render visual para que vuelva a cargar correctamente
        document.body.style.display = 'none';
        document.body.offsetHeight;
        document.body.style.display = 'flex';
    }
});