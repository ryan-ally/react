import logo from 'logo.svg';
import './index.js';
import './index.css';
import App from './App';


function App() {
  return (
    <div className="App">
    <div className="navbar">
    <ul className="navbar-list">
    <li><a href="hero-footer">faq</a></li>
    <li><a href="hero-footer">about</a></li>
    <li><a href="App-header">home</a></li>
    </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>hello there!</h1>
        <p>
         loren ipsem color opdor skippidy doyy goo.
        </p>
      </header>
      <br />
      <div className="hero-footer">
      <img src={logo} className="hero-footer-img" alt="logo" />
         <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
     </div>
    </div>
    </div>
  );
}

export default App;