import React from 'react';

const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', 'd', 'k', 'l', 'm', 'n', 'r', 's', 't']

export const GetConsonant = () => {
  let rand = Math.floor(Math.random() * consonants.length);
  let aConsonant = consonants[rand];

  return (
    <span>
    {aConsonant}
    </span>
  );
};
