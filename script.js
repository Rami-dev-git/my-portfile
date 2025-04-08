const toggleButton = document.getElementById('toggleMode');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Cambiar ícono del botón
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️';
    } else {
        toggleButton.textContent = '🌙';
    }
});



<script>
const form = document.getElementById('formulario-contacto');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // evita que se recargue la página
    alert('¡Gracias por contactarte! Te responderé pronto.');
    form.reset(); // limpia los campos
});
</script>
