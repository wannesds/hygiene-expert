import React, {useState} from 'react';
import './App.scss';
import Intro from './containers/Intro';

import { Translation, changeLocale } from "@psyycker/react-translation";

function App() {

  const initState = {
    introPage: true
  };
  const [introPage, setIntroPage] = useState(initState.introPage);

  const toggleIntroPage = (lang) => {
    changeLocale(lang)
    setIntroPage(false)
  }
  
  return (
    <div className="App">
      {introPage === true ?
        <Intro toggle={(lang) => toggleIntroPage(lang)}/>
        :
        <div><Translation translationKey="component.title" /></div>
      }
    </div>
  );
}

export default App;
