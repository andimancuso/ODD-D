import React from 'react';
import { GetConsonant } from './GetConsonant';
import { GetCapVowel } from './GetCapVowel';
import { GetSyllableCV } from './GetSyllableCV';

export const GetVName = () => {
  let rand = Math.floor(Math.random() * 10);

  if (rand < 3) {
    return (<span>
      <GetCapVowel /><GetSyllableCV /><GetConsonant />
      </span>);
  } else if (rand < 6) {
    return (<span>
      <GetCapVowel /><GetSyllableCV /><GetSyllableCV />
      </span>);
  } else if (rand < 8) {
    return (<span>
      <GetCapVowel /><GetSyllableCV /><GetSyllableCV /><GetConsonant />
      </span>);
  } else if (rand < 9) {
    return (<span>
      <GetCapVowel /><GetSyllableCV /><GetSyllableCV /><GetSyllableCV />
      </span>);
  } else {
    return (<span>
      <GetCapVowel /><GetSyllableCV /><GetConsonant />
      </span>);
  }

};
