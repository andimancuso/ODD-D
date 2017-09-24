import React from 'react';

const capConsonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'V', 'W', 'X', 'Z', 'Sh', 'Th', 'Ch', 'Qu'];

export const GetCapConsonant = () => {
  let rand = Math.floor(Math.random() * capConsonants.length);
  let capConsonant = capConsonants[rand];

  return (
    <span>
    {capConsonant}
    </span>
  );
};
