import styled from 'styled-components';
export default function Footer(){
    return (
        <FooterStyle>
            <div className="footer"><p>0/4 CONCLUIDOS</p></div>
        </FooterStyle>
        
    )

}

const FooterStyle = styled.div 
`
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