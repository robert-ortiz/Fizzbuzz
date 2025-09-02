import Calcular from './sumador.js';

describe('FizzBuzz', () => {
  it('deberia devolver la secuencia hasta el numero dado', () => {
    expect(Calcular(3)).toEqual('1 2 Fizz');
  });

  it('deberia devolver la secuencia hasta 5', () => {
    expect(Calcular(5)).toEqual('1 2 Fizz 4 5');
  });
});
