import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Providers } from './contexts';
import Global from './styles/global';
import RoutesMain from './routes';
function Apps() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const App = () => {

  return (
    <Providers>
      <Global/>
      <RoutesMain/>
    </Providers>
  );
};

export default App;
