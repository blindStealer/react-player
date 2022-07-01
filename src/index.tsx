import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store/index";
import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

`
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <GlobalStyles/>
        <App />
    </Provider>
);
