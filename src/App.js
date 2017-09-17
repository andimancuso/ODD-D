import React from 'react';
import './App.css';
import { Header } from './Header';
import { Book } from './Book';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          <Book />
        </p>
      </div>
    );
  }
}

export default App;
