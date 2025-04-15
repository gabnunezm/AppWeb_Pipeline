describe('Pruebas de integración', () => {
    test('Prueba básica de integración', () => {
        expect(true).toBe(true);
    });
    
 
    test('Integración entre componentes', () => {
        const { sumar } = require('../../src/app');
        const resultado = sumar(2, 3);
        expect(resultado).toBe(5);
    });
});