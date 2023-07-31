import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled';

const Label = styled.label`
    color:#FFF;
    display: block;
    font-family: 'lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
    margin-bottom: 30px;
`


//hook propio, retorna la funcion en un arreglo 
function useSelectMonedas(label, opciones) {
   
  const [state, SetState] = useState(''); 
  const selectMonedas = ()=>(
        <>
            <Label>{label}</Label>
            <Select value={state} onChange={e =>SetState(e.target.value)}>
                <option value="Seleccione">Selecciona la Moneda</option>
                {opciones.map ( opc=>(
                    <option key={opc.id} value={opc.id}>
                        {opc.nombre}
                    </option>
                ) )}
            </Select>
        </>
    )
  

  return[state, selectMonedas];
}

export default useSelectMonedas
