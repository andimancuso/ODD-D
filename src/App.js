import React from 'react';
import './index.css';
import { Header } from './components/Header';
import { AppSwitcher } from './AppSwitcher';

export const App = () => {
    return (
      <div className="App">
          <Header />
        <div className="App-intro">
          <AppSwitcher />
        </div>
      </div>
    );
}
