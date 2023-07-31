import { useEffect, useState } from 'react'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Spiner from './components/Spiner'
import styled from '@emotion/styled'
import ImagenCripto from './img/imagen-criptos.png'

const Contenedor = styled.div`
  max-width : 900px;
  margin :0 auto;
  width: 90;
  @media(min-width: 992px){
    display:grid;
    grid-template-columns: repeat(2, 1fr);
  }

`
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block
`
const Heading = styled.h1`
  font-family : 'lato', sans-serif;
  color: #FFF; 
  text-align: center;
  font-weight: 700;
  margin-top :80px;
  margin-bottom: 50px;
  font-size: 34px;
  &::after {
    content: '';
    width: 180px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin:10px auto 0 auto;
  }
`  

function App() {

  const[monedas, setMonedas] = useState({});
  const[resultado, setResultado] = useState({});
  const[cargando, setCargando] = useState(false);
  useEffect(()=>{
    if(Object.keys(monedas).length > 0){
      const {moneda, criptomoneda} = monedas;
      const contizarCripto = async()=>{
        setCargando(true);
        setResultado({});
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setResultado(resultado.DISPLAY[criptomoneda][moneda]);
        setCargando(false); 
      }
      contizarCripto();
    }
  },[monedas]);
return (
  
  <Contenedor>
    <Imagen
    src={ImagenCripto}
    alt='Imagenes Criptomonedas'
    /> 
    <div>
    <Heading> Cotiza Criptomonedas app</Heading>
    <Formulario setMonedas ={setMonedas}/>

    {cargando && <Spiner /> }    
    {resultado.PRICE && <Resultado resultado = {resultado} /> }    
    

    </div>
  </Contenedor>
  
  
)
}

export default App
