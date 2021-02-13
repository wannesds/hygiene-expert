import logo from '../assets/logo.svg';
import './Intro.scss';

function Intro() {
  return (
    <div className="Intro">
        <img src={logo} className="App-logo" alt="logo" />
        {/* change logo when mobile view */}
        <div className="lang-select-box">
          <a href=''>NL</a>
          <a href=''>FR</a>
          <a href=''>ENG</a>
        </div>
    </div>
  );
}

export default Intro;
