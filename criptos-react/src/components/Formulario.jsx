import { useEffect, useState } from "react"
import Error from "./Error"
import useSelectMonedas from "../hooks/useSelectMonedas"
import {monedas} from '../data/monedas'
import styled from "@emotion/styled"

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform:uppercase;
    font-size:20px;
    border-radius: 5px;
    transition: background-color .3s ease;

    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

function Formulario({setMonedas}) {
    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);

    //hook propio permite reutilizar funciones definidas en el hook en este  caso es select
    const [moneda, SelectMonedas] = useSelectMonedas('selecciona la moneda!!', monedas);
    const [criptomoneda, SelectCriptomoneda] = useSelectMonedas('selecciona la Criptomoneda!!', criptos);

    //use efect lo podemos usar para consultar una API 
    useEffect(()=>{
        const consultarApi = async()=>{
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            const arrayCriptos = resultado.Data.map( cripto => {
                
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre : cripto.CoinInfo.FullName
                }
                return objeto;
            })
            setCriptos(arrayCriptos);
        }
        consultarApi();
    },[])

    const handleSubmit= e=>{
        e.preventDefault();
        if([moneda, criptomoneda].includes('')){

            setError(true);
            setTimeout(() => {
                setError(false);
                
            }, 10000);
        }else{
            
            setError(false);
            setMonedas({moneda,criptomoneda});
        }
    }

  return (
    <>
        {error && <Error>Selecciona las monedas</Error>}
        <form onSubmit={handleSubmit}>
            <SelectMonedas />
            <SelectCriptomoneda />
            
            <InputSubmit type="submit" value="Cotizar"/>
        </form>


    </>
  )
}

export default Formulario
