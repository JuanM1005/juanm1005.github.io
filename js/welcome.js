const enterBtn = document.getElementById('enterBtn');

enterBtn.addEventListener('click', () => {
    document.body.classList.add('fade-out');

    window.location.href = "main.html";
});