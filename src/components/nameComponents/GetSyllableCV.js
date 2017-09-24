import React from 'react';
import { GetVowel } from './GetVowel';
import { GetConsonant } from './GetConsonant';
import { GetDoubleConsonant } from './GetDoubleConsonant';
import { GetDoubleVowel } from './GetDoubleVowel';

export const GetSyllableCV = () => {

  let rand = Math.floor(Math.random() * 10);

  if (rand < 4) {
    return (<span><GetConsonant /><GetVowel /></span>);
  } else if (rand < 6) {
    return (<span><GetConsonant /><GetDoubleVowel /></span>);
  } else if (rand < 8) {
    return (<span><GetDoubleConsonant /><GetVowel /></span>);
  } else if (rand < 9) {
    return (<span><GetDoubleConsonant /><GetDoubleVowel /></span>);
  } else {
    return (<span><GetConsonant /><GetVowel /></span>);
  };
};
