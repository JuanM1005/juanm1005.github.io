document.addEventListener('DOMContentLoaded', () => {
    const enterBtn = document.getElementById('enterBtn');

    if (!enterBtn) return;

    enterBtn.addEventListener('click', () => {
        // Añadimos la clase para el efecto de salida
        document.body.classList.add('fade-out');

        // Pequeño retraso para permitir que la animación se vea antes de cambiar de página
        setTimeout(() => {
            window.location.href = "main.html";
        }, 500);
    });
});

/**
 * Este evento es crucial para solucionar el problema del botón "Atrás".
 * Se dispara cada vez que la página se vuelve visible.
 */
window.addEventListener('pageshow', (event) => {
    // Eliminamos la clase fade-out para asegurar que el contenido sea visible
    document.body.classList.remove('fade-out');
    
    // Forzamos la opacidad del body por si acaso el navegador guardó el estado intermedio
    document.body.style.opacity = "1";
});