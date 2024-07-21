function toggleparrafo(id) {
    const parrafo = document.getElementById(id);
    if (parrafo.style.display === 'none' || parrafo.style.display === '') {
        parrafo.style.display = 'block';
    } else {
        parrafo.style.display = 'none';
    }
}