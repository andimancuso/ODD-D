import React from 'react';
import { GetVowel } from './GetVowel';
import { GetCapConsonant } from './GetCapConsonant';
import { GetSyllableVC } from './GetSyllableVC';

export const GetCName = () => {
  let rand = Math.floor(Math.random() * 10);

  if (rand < 3) {
    return (<span>
      <GetCapConsonant /><GetSyllableVC /><GetVowel />
      </span>);
  } else if (rand < 6) {
    return (<span>
      <GetCapConsonant /><GetSyllableVC /><GetSyllableVC />
      </span>);
  } else if (rand < 8) {
    return (<span>
      <GetCapConsonant /><GetSyllableVC /><GetSyllableVC /><GetVowel />
      </span>);
  } else if (rand < 9) {
    return (<span>
      <GetCapConsonant /><GetSyllableVC /><GetSyllableVC /><GetSyllableVC />
      </span>);
  } else {
    return (<span>
      <GetCapConsonant /><GetSyllableVC /><GetVowel />
      </span>);
  }

};
