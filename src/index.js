import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { setTranslationConfig } from "@psyycker/react-translation" //call first
import "@psyycker/react-translation"

import { registerTranslations } from "@psyycker/react-translation";
import french from "./assets/text/french.json";
import english from "./assets/text/english.json";
import dutch from "./assets/text/dutch.json";

setTranslationConfig({
  defaultLocale: "EN" //sets default lang.
})

registerTranslations({
  "EN": english,
  "FR": french,
  "NL": dutch
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
