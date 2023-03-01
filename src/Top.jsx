import logo from "../src/assets/images/logo.png"
import styled from 'styled-components';
export default function Top() {
    return (

        <TopIcons>
            <img src={logo}></img>
            <h1> ZapRecall</h1>
        </TopIcons>


    )
}

const TopIcons = styled.div`
  min-width: 96%;
  display: flex;
  flex-direction: row;
  height: 150px; 
  img {
    width: 52px;
  height: 60px;
  position: relative;
  top: 42px;
  left: 59px;

  } 
  h1 {
    width: 203.17px;
  height: 44px;
  font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.012em;
  color: #FFFFFF;
  position: relative;
  top: 48px;
  left: 70px;
  }
`