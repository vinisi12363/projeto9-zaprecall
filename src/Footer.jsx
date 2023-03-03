import styled from 'styled-components';
import party from "./assets/images/party.png"
import sad from "./assets/images/sad.png"
import iconeCerto from "./assets/images/icone_certo.png"
import iconeErro from "./assets/images/icone_erro.png"
import iconeQuase from "./assets/images/icone_quase.png"
import cards from "./cards"

export default function Footer({resposta, contRespondidas}){
  
    

    return (
        <FooterStyle>
            <div className="footer"><p>{`${contRespondidas} / ${cards.length} CONCLUIDOS`}</p>
            <img src={resposta}></img>
            </div>
           
            
        </FooterStyle>
        
    )

}


const IconesStyled = styled.img`
    position:relative;
    top:0px;

`
const FooterStyle = styled.div`
    position: fixed;
    bottom: 0px;
    width: 100vw;
    height: 70px;
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .footer{
        display:flex;
        flex-direction:row;
        justify-content:center;
        width:100%;
        height:100%;
        align-items: center;justify-content: center;
    }
    p {
    
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    
    }
  


`


