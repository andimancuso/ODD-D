import React from 'react';
import { NonMagicBook } from './NonMagicBook'
import { MagicBook } from './MagicBook'
import { ReligiousBook } from './ReligiousBook'

export class GetBook extends React.Component {
  render() {
    let randNum = Math.floor(Math.random() * 2);

    if (randNum === 1) {
      return (<div><MagicBook /></div>)
    } else if (randNum === 2) {
      return (<div><NonMagicBook /></div>)
    } else {
      return (<div><ReligiousBook /></div>)
    }
  };
};
