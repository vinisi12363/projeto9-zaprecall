import Decks from "./Decks";
import Top from "./Top"
import Footer from "./Footer"
import styled from "styled-components";
import { useState } from "react";


export default function App(){
  
  const [resposta, setResposta] = useState([])
  
  return (

      <Main>
        <Top></Top>
        <Decks
          
          resposta = {resposta}
          setResposta =  {setResposta}
       

        />
       
        <Footer
        
          resposta = {resposta}
          setResposta =  {setResposta}
        

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

