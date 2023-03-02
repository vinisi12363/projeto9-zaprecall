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
top: 617px;
width: 375px;
height: 70px;
background: #FFFFFF;
box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
flex-direction: row;
justify-content: center;
align-items: center;

p {
    position: relative;
    left: 115px;
    top: 15px;
    width: 100%;
    height: 100%;
    display: flex;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    color: #333333;
  
  }
  







`