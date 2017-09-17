import React from 'react';
import logo from './glyph-green.png';
import './App.css';

export class Header extends React.Component {
  render() {
    return (
        <div className="App-header">
          <img src={logo} className="App-logo" alt="maaaAAAaaagiiic" />
          <h2>OD<span style={{color: 'red' }}>D&D</span></h2>
        </div>
    );
  }
}
