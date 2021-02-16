import logo from '../assets/logo.svg';
import './Intro.scss';
import { Translation } from "@psyycker/react-translation";


function Intro({toggle}) {
const onToggle = (lang) => {
  toggle(lang)

}
  return (
    <div className="Intro">
        <img src={logo} className="App-logo" alt="logo" />
        {/* change logo when mobile view */}
        <div className="lang-select-box">
          <button onClick={() => onToggle('NL')}>NL</button>
          <button onClick={() => onToggle('FR')}>FR</button>
          <button onClick={() => onToggle('EN')}>EN</button>
        </div>
    </div>
  );
}

export default Intro;
