import styled from 'styled-components';
import seta from './assets/images/seta_play.png'
import setaVirarImg from './assets/images/seta_virar.png'
import cards from "./cards.js"
export default function Decks({ clickNaSeta, setClickNaSeta, clickNaSetaVirar, setClickNaSetaVirar }) {


    return (

        <DecksStyle>
            <FlashCards
                clickNaSeta={clickNaSeta}
                setClickNaSeta={setClickNaSeta}
                clickNaSetaVirar={clickNaSetaVirar}
                setClickNaSetaVirar={setClickNaSetaVirar}
            />
        </DecksStyle>

    )

}


function FlashCards({ clickNaSeta, setClickNaSeta, clickNaSetaVirar, setClickNaSetaVirar }) {
    function setarDivs() {
        setClickNaSeta(true)
    }
    function setaVirar() {
        setClickNaSetaVirar(true)
    }
    return (
        <>

            <FlashCardStyle clickNaSeta={clickNaSeta} >
                <p>pergunta 1</p>
                <img src={seta} onClick={() => setarDivs()}></img>
            </FlashCardStyle>

            <QuestionAreaStyle clickNaSeta={clickNaSeta} clickNaSetaVirar={clickNaSetaVirar}>
                <p>O que é JSX ?</p>
                <img src={setaVirarImg} id="setaVirarImg" onClick={() => setaVirar()}></img>
            </QuestionAreaStyle>


            <ResponseAreaStyle clickNaSeta={clickNaSeta} clickNaSetaVirar={clickNaSetaVirar}>
                <p>JSX é uma sintaxe dentro do JS </p>
                <div className='btnArea'>
                    <button className="btnErrou">Não Lembrei</button>
                    <button className="btnQuaseAcertou">Quase Lembrei</button>
                    <button className='btnAcertou'>Zap!</button>
                </div>
            </ResponseAreaStyle>

        </>

    )
}





const FlashCardStyle = styled.div`
    display: ${(props) => props.clickNaSeta && "none"};
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
            left: 250px;
            top: 0px;
    }

`

const DecksStyle = styled.div`
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
  display: ${(props) => props.clickNaSeta ? "" : "none"};
  display: ${(props) => props.clickNaSetaVirar && "none"};

  p{
    width: 280px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
    position: relative;
    left: 1px;
    top: 10px;
  }
    img{
    position: relative;
    left: 150px;
    top: 80px;
  } 

`

const ResponseAreaStyle = styled.div`
  
    display: ${(props) => props.clickNaSeta ? "" : "none"};
    display: ${(props) => props.clickNaSetaVirar ? "" : "none"};
    width: 100%;
    height: 131px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    flex-direction: column;
    align-items:  center;
    background: #feffd3;

    .responseArea {
        position: relative;
        top:18px;
        height: 115px;
        min-width: 96%;
        background: #feffd3;
    }

    .responseArea p {
        width: 300px;
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        text-align: right;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }
    .btnArea{
    position: relative;
    top: 60px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    min-width: 300px;
    height: 45px;
    background: #feffd3;
    
    .btnErrou{
        width: 85px;
        height: 37px;
        background: #FF3030;
        border-radius: 5px;
        color: #FFFFFF;
    }

    .btnQuaseAcertou{
        width: 85px;
        height: 37px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        text-align: center;
        background: #ff912f;
        color: #FFFFFF;
        border-radius: 5px;
    }
    .btnAcertou{
        width: 85px;
        height: 37px;
        background: #2FBE34;
        border-radius: 5px;
        color: #FFFFFF;
    }
}


  
`

