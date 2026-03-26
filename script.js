const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseover', () => {
    // Menghitung posisi acak
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});