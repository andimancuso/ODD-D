import React from 'react';

const doubleConsonants = ['th', 'sh', 'ch', 'tch', 'll', 'ss', 'rr', 'tt', 'ck', 'ff', 'gg', 'bb', 'dd', 'zz', 'th', 'sh', 'ch', 'll', 'ss', 'rr'];

export const GetDoubleConsonant = () => {
  let rand = Math.floor(Math.random() * doubleConsonants.length);
  let doubleConsonant = doubleConsonants[rand];

  return (
    <span>
    {doubleConsonant}
    </span>
  );
};
