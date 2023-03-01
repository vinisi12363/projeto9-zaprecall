import styled from 'styled-components';
import seta from './assets/images/seta_play.png'
import setaVirar from './assets/images/seta_virar.png'
export default function Decks() {


    return (

        <div className="Decks">
            <FlashCards></FlashCards>
        </div>

    )

}


function FlashCards() {
    return (
        <>

            <div className='flashCards hide'>
                <p>pergunta 1</p>
                <button></button><img src={seta}></img>
            </div>
                 <img src={setaVirar} id="setaVirar"></img>
                <div className='flip-container'>
                    <div className='flipper'>
                        <div className="questionArea">
                            <p>O que é JSX ?</p>
                            
                        </div>

                        <div className='flashVerse'>
                            <div className='responseArea'>
                                <p>JSX é uma sintaxe dentro do JS  </p>
                            </div>
                            <div className='btnArea'>
                                <button className="btnErrou">Não Lembrei</button>
                                <button className="btnQuaseAcertou">Quase Lembrei</button>
                                <button className='btnAcertou'>Zap!</button>
                            </div>
                        </div>
                    </div>
                 

                </div>
               




        </>

    )
}
