import React from 'react';
import { nonMagicBook } from './components/NonMagicBook'
import { magicBook } from './components/MagicBook'
import { religiousBook } from './components/ReligiousBook'
import { ResetButton } from './components/ResetButton'


function getBook() {
  let bookSelection = [nonMagicBook, magicBook, religiousBook];
  let randomBook = bookSelection[Math.floor(Math.random() * bookSelection.length)];
  return (
    <h2 className="book-title">
      {randomBook}
    </h2>
    );
};

export class Book extends React.Component {
  render() {
    return (
        <div>
          <p>During your recent adventures, you find a dusty tome with the title:</p>
          {getBook()}
          <ResetButton />
        </div>
    );
  };
};
