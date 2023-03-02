import { click } from '@testing-library/user-event/dist/click';
import styled from 'styled-components';
import seta from './assets/images/seta_play.png'
import setaVirar from './assets/images/seta_virar.png'
import cards from "./cards.js"
export default function Decks({clickNaSeta,setClickNaSeta}) {


    return (

        <DecksStyle>
             <FlashCards
                clickNaSeta = {clickNaSeta}
                setClickNaSeta = {setClickNaSeta}
             />
        </DecksStyle>

    )

}


function FlashCards({clickNaSeta,setClickNaSeta}) {
    function setarDivs() {
      setClickNaSeta(true);
    }

    return (
        <>

            <FlashCardStyle clickNaSeta={clickNaSeta} >
                <p>pergunta 1</p>
                <img src={seta} onClick={()=>setarDivs()}></img>
            </FlashCardStyle>
            
            <QuestionAreaStyle clickNaSeta={clickNaSeta}>
                <p>O que é JSX ?</p>
                <img src={setaVirar} id="setaVirar"></img>
            </QuestionAreaStyle>
        </>

    )
}













const FlashCardStyle = styled.div`
   
    margin-top: 25px;
    width: 300px;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    background: #feffd3;
    display: ${(props)=> props.clickNaSeta && "none"};
    
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
  overflow:hidden;

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
  display: ${(props)=> props.clickNaSeta? "":"none" };

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