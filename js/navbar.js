const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.querySelector('.sidebar');
const sidebarLinks = document.querySelectorAll('.sidebar a');
const sidebarCloseBtn = document.getElementById('sidebar-btn-close');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Cerrar con botón X
sidebarCloseBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

// Cerrar al hacer clic en un enlace
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });
});

// Cerrar al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
        sidebar.classList.remove('active');
    }
});
