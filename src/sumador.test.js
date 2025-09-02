import Calcular from './sumador.js';

describe('FizzBuzz', () => {
  it('deberia devolver la secuencia hasta el numero dado', () => {
    expect(Calcular(3)).toEqual('1 2 Fizz');
  });

  it('deberia devolver la secuencia hasta 5', () => {
    expect(Calcular(5)).toEqual('1 2 Fizz 4 5');
  });

  it('deberia devolver la secuencia hasta 11', () => {
    expect(Calcular(11)).toEqual('1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11');
  });

  it('deberia devolver la secuencia hasta 14', () => {
    expect(Calcular(14)).toEqual('1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14');
  });

});
