import React from 'react';
import './index.css';
import { Header } from './components/Header';
import { Book } from './Book';
import { NobleHouse } from './NobleHouse';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Header />
        <div className="App-intro">
          <NobleHouse />
        </div>
      </div>
    );
  }
}
