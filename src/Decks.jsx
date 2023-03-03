import styled from 'styled-components';
import seta from './assets/images/seta_play.png'
import setaVirarImg from './assets/images/seta_virar.png'
import iconeCerto from "./assets/images/icone_certo.png"
import iconeErro from "./assets/images/icone_erro.png"
import iconeQuase from "./assets/images/icone_quase.png"
import cardsArray from "./cards"
import { useState } from "react";


export default function Decks({resposta, setResposta, contRespondidas,setContRespondidas}) {


    return (
      <>
        <DecksStyle>     
                        
                            {   
                                cardsArray.map((card, index) => (
                                
                                <FlashCards
                                    index={index}
                                    question={card.question}
                                    answer={card.answer}
                                    resposta={resposta}
                                    setResposta={setResposta}
                                    contRespondidas={contRespondidas}
                                    setContRespondidas={setContRespondidas}

                                />
                            ))}

                  
                        



        </DecksStyle>
     
                         
                        
      </>
    )

}


function FlashCards({index, question, answer, resposta, setResposta, contRespondidas, setContRespondidas }) {
    const [imagemIcon , setImageIcon] = useState(seta)
    const [color, setColor] = useState("black")
    const [clickNaSeta, setClickNaSeta] = useState(false)
    const [clickNaSetaVirar, setClickNaSetaVirar] = useState(false)
    const [flagAcertou, setFlagAcertou] = useState(false) 
    const [flagQuase, setFlagQuase] = useState(false)
    const [flagErrou, setFlagErrou] = useState(false)
    const [stringState, setStringState] = useState("play-btn");
   
    function setarDivs() {
       if(imagemIcon===seta) {
            setClickNaSeta(true) 
        }
           
    }

    function setaVirar() {
        setClickNaSetaVirar(true)
    }

    function setAcertou(){
        setStringState("zap-icon")
        setResposta([...resposta, iconeCerto])
        setClickNaSetaVirar (false)
        setClickNaSeta (false)
        setFlagAcertou (true)
        setImageIcon(iconeCerto)
        setColor("#2FBE34")
        contRespondidas+=1;
        setContRespondidas(contRespondidas)
    }

    function setQuase(){
        setStringState("partial-icon")
        setResposta ([...resposta, iconeQuase])
        setClickNaSetaVirar (false)
        setClickNaSeta (false)
        setFlagQuase (true)
        setImageIcon(iconeQuase)
        setColor("#FF912F")
        contRespondidas+=1;
        setContRespondidas(contRespondidas)
    }

    function setErrou (){
        setStringState("no-icon")
        setResposta([...resposta, iconeErro])
        setClickNaSetaVirar (false)
        setClickNaSeta (false)
        setFlagErrou(true)
        setImageIcon(iconeErro)
        setColor("#FF3030")
        contRespondidas+=1;
        setContRespondidas(contRespondidas)
    }
 
    
    return (
        <div div data-test="flashcard">
            
            <FlashCardStyle  clickNaSeta={clickNaSeta}  flagAcertou={flagAcertou} flagErrou= {flagErrou} flagQuase={flagQuase} imagemIcon={imagemIcon} color={color}>
               <div>
                    <p data-test="flashcard-text">Pergunta {index+1}</p>
                    <img src={imagemIcon} onClick={() => setarDivs()} ></img>
               </div>
               
            </FlashCardStyle>

            <QuestionAreaStyle clickNaSeta={clickNaSeta} clickNaSetaVirar={clickNaSetaVirar}>
                <p data-test="flashcard-text" >{question}</p>
                
                <img src={setaVirarImg} data-test= {stringState}  id="setaVirarImg" onClick={() => setaVirar() }></img>
                
               
            </QuestionAreaStyle>


            <ResponseAreaStyle clickNaSeta={clickNaSeta} clickNaSetaVirar={clickNaSetaVirar}>
                <div>
                     <p className="pResponseArea"data-test="flashcard-text">{answer}</p>
                </div>
            
                
                <div className='btnArea'>
                    <button data-test = "no-btn" className="btnErrou" onClick={()=> setErrou()}>Não Lembrei</button>
                    <button data-test = "partial-btn"className="btnQuaseAcertou" onClick={()=> setQuase()}>Quase Lembrei</button>
                    <button data-test = "zap-btn"className='btnAcertou' onClick={()=> setAcertou()}>Zap!</button>
                </div>
            </ResponseAreaStyle>

        </div>

    )
}



const FlashCardStyle = styled.div`
    display: ${(props) => props.clickNaSeta && "none"};
    margin-top: 25px;
    width: 300px;
    min-height: 65px;
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
        color: ${(props)=>props.color };
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
  height:100%;
  flex-direction: column;
  align-items: center;
  overflow:hidden;

`

const QuestionAreaStyle = styled.div`
  margin-top:25px;
  min-width:300px;
  min-height: 131px;
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
    left: 5px;
    top: 10px;
  }
    img{
    position: relative;
    left: 120px;
    top: 90px;
  } 

`

const ResponseAreaStyle = styled.div`
    margin-top : 25px;
    display: ${(props) => props.clickNaSeta ? "" : "none"};
    display: ${(props) => props.clickNaSetaVirar ? "" : "none"};
    max-width:300px;
    min-height: 131px;
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

    p {
        width: 300px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 18px;
        color: #333333;
        position:relative;
        left: 5px;
        top: 10px;
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
        border-radius: 5px;
        
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

