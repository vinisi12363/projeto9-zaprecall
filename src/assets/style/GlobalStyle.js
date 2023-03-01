import { createGlobalStyle } from 'styled-components'
import fonteRighteous from '../fonts/Recursive-VariableFont_CASL,CRSV,MONO,slnt,wght.ttf';
import fonteRecursive from '../fonts/Righteous-Regular.ttf';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: 'Recursive', sans-serif;

  }
  @font-face {
    font-family: 'fonteRighteous';
    src: url(${fonteRighteous});
    font-style: normal;
    font-weight: 400;
    color: #FFFFFF;
  }
`
 
export default GlobalStyle



const Titulo = styled.h1`
  font-family: 'sua_fonte';
`;
