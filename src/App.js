import Decks from "./Decks";
import Top from "./Top"
import Footer from "./Footer"
import styled from "styled-components";


export default function App(){
  return (
      <Main>
        <Top></Top>
        <Decks></Decks>
        <Footer></Footer>
      </Main>
  )
}


const Main = styled.div`
    margin-top: 20px;
  background-color: #fb6b6b;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 375px;
  height: 667px;
  overflow: hidden;

`

