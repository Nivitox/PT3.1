// sticky.js

window.addEventListener('scroll', () => {
    if (window.scrollY >= verifier.offsetTop) {
        verifier.classList.add('stuck');
        verifier.style.top = '0px'; // Ajusta esta altura como desees
    } else {
        verifier.classList.remove('stuck');
        verifier.style.top = ''; // Resetea el top a su valor original
    }
});
