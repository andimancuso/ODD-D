import React from 'react';
import { GetAVowel } from './GetVowel';

const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
const doubleConsonants = ['th', 'sh', 'ch', 'tch', 'mn', 'll', 'ss', 'rr', 'tt', 'ck', 'ff', 'gg', 'bb', 'dd', 'zz'];
const doubleVowels = ['aa', 'ae', 'ai', 'ao', 'au', 'ea', 'ee', 'ei', 'eo', 'eu', 'ia', 'ie', 'io', 'iu', 'oa', 'oe', 'oi', 'oo', 'ou', 'ua', 'ue', 'ui', 'uo'];
const capVowels = ['A', 'E', 'I', 'O', 'U'];
const capConsonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'V', 'W', 'X', 'Z', 'Sh', 'Th', 'Ch', 'Qu']

export class GetName extends React.Component {
  render() {
/*
    let getAConsonant = () => {
      let rand = Math.floor(Math.random() * consonants.length);
      let aConsonant = consonants[rand];
      return aConsonant;
    };

    let getADoubleConsonant = () => {
      let rand = Math.floor(Math.random() * doubleConsonants.length);
      let aDoubleConsonant = doubleConsonants[rand];
      return aDoubleConsonant;
    };

    let getADoubleVowel = () => {
      let rand = Math.floor(Math.random() * doubleVowels.length);
      let aDoubleVowel = doubleVowels[rand];
      return aDoubleVowel;
    };

    let capConsonant = capConsonants[Math.floor(Math.random() * capConsonants.length)];
    let capVowel = capVowels[Math.floor(Math.random() * capVowels.length)];
    let doubleVowel = getAVowel() + getAVowel();

    let syllablesVC = [getAVowel() + getAConsonant(), getAVowel() + getADoubleConsonant(), getADoubleVowel() + getAConsonant(), getADoubleVowel() + getADoubleConsonant()]
    let syllablesCV = [getAConsonant() + getAVowel(), getAConsonant() + getADoubleVowel(), getADoubleConsonant() + getAVowel(), getADoubleConsonant() + getADoubleVowel()];

    let getSyllableVC = () => {
      let rand = Math.floor(Math.random() * syllablesVC.length);
      let syllableVC = syllablesVC[rand];
      return syllableVC;
    };

    let getSyllableCV = () => {
      let rand = Math.floor(Math.random() * syllablesCV.length);
      let syllableCV = syllablesCV[rand];
      return syllableCV;
    };

    let nameOptions = ["De Rolo",
    capConsonant + getSyllableVC() + getAVowel(),
    capConsonant + getSyllableVC() + getSyllableVC(),
    capConsonant + getSyllableVC() + getSyllableVC() + getAVowel(),
    capConsonant + getSyllableVC() + getSyllableVC() + getSyllableVC(),
    capVowel + getSyllableCV() + getAConsonant(),
    capVowel + getSyllableCV() + getSyllableCV(),
    capVowel + getSyllableCV() + getSyllableCV() + getAConsonant(),
    capVowel + getSyllableCV() + getSyllableCV() + getSyllableCV()
    ];

    let getThatDamnName = () => {
      let rand = Math.floor(Math.random() * nameOptions.length);
      let aName = nameOptions[rand];
      return aName;
    };
*/
    return (
      <span>
      Hey
      </span>
    );
  };
};
