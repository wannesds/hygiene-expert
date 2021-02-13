import logo from './assets/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

        <img src={logo} className="App-logo" alt="logo" />
        <div className="lang-select-box">
          <a href=''>NL</a>
          <a href=''>FR</a>
          <a href=''>ENG</a>
        </div>

    </div>
  );
}

export default App;
