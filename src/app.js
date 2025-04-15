document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('message').textContent = '¡Aplicación cargada con éxito!';
});

// Función para pruebas
function sumar(a, b) {
    return a + b;
}

module.exports = { sumar };