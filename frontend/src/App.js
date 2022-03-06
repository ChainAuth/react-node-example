import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { publiclient } from 'chainauth-js-sdk';

const setting = { apiKey: "aabbb" }
publiclient.setSettings(setting);
function App() {
  const showNonce = async () => {
    const nonce = await publiclient.getLoginNonce();
    console.log(nonce);
  }
  const clickMe = async () => {
    console.log("clicked");
    const nonce = await publiclient.getLoginNonce();
    console.log('nonce', nonce);
    const v = await publiclient.getLoginSignature(nonce);
    console.log('v', v);
    const token = await publiclient.getTokenFromSigature(nonce, v);
    console.log('token', token);
  }
  useEffect(() => {
    showNonce();
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p onClick={clickMe}>Click me</p>
      </header>
    </div>
  );
}

export default App;
