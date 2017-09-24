import React from 'react';

const capVowels = ['A', 'E', 'I', 'O', 'U'];

export const GetCapVowel = () => {
  let rand = Math.floor(Math.random() * capVowels.length);
  let capVowel = capVowels[rand];

  return (
    <span>
    {capVowel}
    </span>
  );
};
