import React from 'react';

const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'a', 'e', 'i', 'o', 'a', 'e']

export const GetVowel = () => {
  let rand = Math.floor(Math.random() * vowels.length);
  let aVowel = vowels[rand];

  return (
    <span>
    {aVowel}
    </span>
  );
};
