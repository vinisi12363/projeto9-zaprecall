import Decks from "./Decks";
import Top from "./Top"
import Footer from "./Footer";
import styled from "styled-components";
import { useState } from "react";



export default function App(){
  const [contRespondidas, setContRespondidas] = useState(0)
  const [resposta, setResposta] = useState([])
  
  return (

      <Main>
        <Top/>
        <Decks
            resposta = {resposta}
            contRespondidas = {contRespondidas}
            setContRespondidas={setContRespondidas}
            setResposta={setResposta}
        />  
        <Footer
            resposta = {resposta}
            contRespondidas = {contRespondidas}
        />
      </Main>
  )
}


const Main = styled.div`
  
  background-color: #fb6b6b;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100vw;
  height: calc(100vw-70px);
  overflow: hidden;

`

