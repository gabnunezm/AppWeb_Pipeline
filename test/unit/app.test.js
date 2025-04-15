const { sumar } = require('../../src/app');

describe('Pruebas unitarias para app.js', () => {
    test('sumar 1 + 2 debe ser igual a 3', () => {
        expect(sumar(1, 2)).toBe(3);
    });

    test('sumar números negativos', () => {
        expect(sumar(-1, -2)).toBe(-3);
    });
});


describe('Pruebas del DOM', () => {
    let originalDocument;
    
    beforeEach(() => {
        originalDocument = { ...document };
        document.body.innerHTML = `
            <p id="message">Cargando...</p>
        `;
        require('../../src/app');
    });
    
    afterEach(() => {
        document = originalDocument;
    });
    
    test('debe actualizar el mensaje del DOM', () => {
        // Simulamos el evento DOMContentLoaded
        const event = new Event('DOMContentLoaded');
        document.dispatchEvent(event);
        
        expect(document.getElementById('message').textContent).toBe('¡Aplicación cargada con éxito!');
    });
});