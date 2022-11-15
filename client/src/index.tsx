import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from "styled-components";
import { StoreProvider } from "easy-peasy";
import { store } from "./store";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, serif;
  };

  ::-webkit-scrollbar {
    display: none;
    width: 0;
  }



  body{
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    overflow-x: hidden;
    overflow-y: scroll;
  };
  #root{
    min-width: 1000px;
  }
`



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <StoreProvider store={store}>
        <GlobalStyles/>
        <App/>
    </StoreProvider>
);
