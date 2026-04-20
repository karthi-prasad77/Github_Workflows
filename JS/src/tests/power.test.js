const power = require('./power');

describe('power function', () => {

    test('positive exponent', () => {
        expect(power(2, 3)).toBe(8);
    });

    test('zero exponent', () => {
        expect(power(5, 0)).toBe(1);
    });

    test('negative exponent', () => {
        expect(power(2, -2)).toBe(0.25);
    });

    test('base zero', () => {
        expect(power(0, 5)).toBe(0);
    });

    test('both zero (edge case)', () => {
        expect(power(0, 0)).toBe(1); // JS Math.pow behavior
    });

});