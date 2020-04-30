import React from 'react';
import logo from '../iem.gif';
import chess from '../chess.gif';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({headerText}) => {
    return (
    <header className="App-header">
        <header className="App-logo">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={chess} className="App-logo" alt="chess" />
          </header>
          <h1 className="App-title">
          {headerText}</h1>
        </header>
    )

};
export default Header;