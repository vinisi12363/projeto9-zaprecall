import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/style/reset.css';
import '../src/assets/style/style.css';
import App from './App';
//import GlobalStyle from './assets/style/GlobalStyle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<GlobalStyle>

     <React.StrictMode>
      <App />
    </React.StrictMode>

 // </GlobalStyle>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

