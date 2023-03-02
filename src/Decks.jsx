import styled from 'styled-components';
import seta from './assets/images/seta_play.png'
import setaVirar from './assets/images/seta_virar.png'
import cards from "./cards.js"
export default function Decks() {


    return (

        <DecksStyle>
             <FlashCards/>
        </DecksStyle>

    )

}


function FlashCards() {
    function setarDivs() {
    
    }

    return (
        <>

            <FlashCardStyle>
                <p>pergunta 1</p>
                <img src={seta} onClick={()=>setarDivs()}></img>
            </FlashCardStyle>
            
            <QuestionAreaStyle>
                <p>O que é JSX ?</p>
                <img src={setaVirar} id="setaVirar"></img>
            </QuestionAreaStyle>
        </>

    )
}

const FlashCardStyle = styled.div`
     display:none;
    margin-top: 25px;
    width: 300px;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    background: #feffd3;
    
    p{
        width: 300px;
        height: 19px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
        position: relative;
        left: 15px;
        top: 23px;
    }
    img {   
            position: relative;
            left: 100px;
            top: 20px;
    }

`

const DecksStyle =styled.div`
  min-width: 96%;
  display: flex;
  flex-direction: column;
  align-items: center;

`

const QuestionAreaStyle = styled.div`
     width: 100%;
  height: 131px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items:  center;
  background: #feffd3;

  p{
    width: 280px;
 
 font-family: 'Recursive';
 font-style: normal;
 font-weight: 700;
 font-size: 16px;
 line-height: 19px;
 color: #333333;
 position: relative;
 left: 15px;
 top: 23px;
  }
  img{
    position: relative;
  left: 265px;
  top: 2px;
  } 

`