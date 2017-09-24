import React from 'react';

const doubleVowels = ['aa', 'ae', 'ai', 'ao', 'au', 'ea', 'ee', 'ei', 'eo', 'eu', 'ia', 'ie', 'io', 'iu', 'oa', 'oe', 'oi', 'oo', 'ou', 'ua', 'ue', 'ui', 'uo', 'ae', 'ai', 'ea', 'ia', 'io', 'oo'];

export const GetDoubleVowel = () => {
  let rand = Math.floor(Math.random() * doubleVowels.length);
  let doubleVowel = doubleVowels[rand];

  return (
    <span>
    {doubleVowel}
    </span>
  );
};
