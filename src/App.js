import React from 'react';
import './index.css';
import { Header } from './components/Header';
import { Book } from './Book';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Header />
        <div className="App-intro">
          <Book />
        </div>
      </div>
    );
  }
}
