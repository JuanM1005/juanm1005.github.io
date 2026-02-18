document.addEventListener('DOMContentLoaded', () => {
    const enterBtn = document.getElementById('enterBtn');

    if (!enterBtn) return;

    enterBtn.addEventListener('click', () => {
        document.body.classList.add('fade-out');

        setTimeout(() => {
            window.location.href = "main.html";
        }, 500);
    });
});

window.addEventListener('pageshow', (event) => {
    document.body.classList.remove('fade-out');
});