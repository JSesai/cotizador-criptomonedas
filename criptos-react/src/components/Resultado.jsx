import styled from "@emotion/styled"
const Res = styled.div`
    color: #fff;
    font-family: 'lato,' sans-serif;
    display:flex;
    align-items:center;
    margin:20px;
    gap:1rem;
`
const Texto = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`
const Precio = styled.p`
    font-size:24px;
    span{
        font-weight: 700;
    }

`
const Imagen = styled.img`
    display: block;
    width: 120px;
`

function Resultado({resultado}) {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;
  return (
    <div>
        <Res>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen criptomoneda" />
            <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
            <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
            <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Res>
     
    </div>
  )
}

export default Resultado
