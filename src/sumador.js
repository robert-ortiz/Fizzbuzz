function Calcular(a) {
  const resultado = [];
  for( let i=1; i <= a ; i ++)
  {
    if(i % 3 === 0)
    {
      resultado.push('Fizz') ;
    }
    else if(i % 5 === 0 )
    {
      resultado.push('Buzz');
    }
    else{
      resultado.push(i);
    }
  }
return resultado.join(' ');
}

export default Calcular;
