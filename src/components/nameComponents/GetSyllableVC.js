import React from 'react';
import { GetVowel } from './GetVowel';
import { GetConsonant } from './GetConsonant';
import { GetDoubleConsonant } from './GetDoubleConsonant';
import { GetDoubleVowel } from './GetDoubleVowel';

export const GetSyllableVC = () => {

  let rand = Math.floor(Math.random() * 10);

  if (rand < 4) {
    return (<span><GetVowel /><GetConsonant /></span>);
  } else if (rand < 6) {
    return (<span><GetVowel /><GetDoubleConsonant /></span>);
  } else if (rand < 8) {
    return (<span><GetDoubleVowel /><GetConsonant /></span>);
  } else if (rand < 9) {
    return (<span><GetDoubleVowel /><GetDoubleConsonant /></span>);
  } else {
    return (<span><GetVowel /><GetConsonant /></span>);
  };
};
