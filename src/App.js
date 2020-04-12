import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import LoginPage from './login/LoginPage'
import HomePage from './Homepage/Homepage'

function App() {
  return (
    

    <Switch>

    <Route exact path='/'>
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
      </header>
    </div>
    
     </Route>
      <Route path='/home'><HomePage/></Route>
      <Route path='/login'><LoginPage/></Route>
    </Switch>
  );
}

export default App;
