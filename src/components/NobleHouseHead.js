import React from 'react';

const liegeRaceOptions = ['an elf', 'a dwarf', 'a human', 'a dragonborn', 'a half-elf', 'a half-orc', 'a halfling', 'a gnome', 'a tiefling', 'an aasimar', 'a genasi'];

const liegeSexOptions = ['man', 'woman', 'androgyne'];

const liegeAgeOptions = ['young', 'youthful', 'middle-aged', 'mature', 'old', 'elderly'];

const liegePersonalityOptions = ['naive', 'bold', 'confident', 'fearful', 'rash', 'arrogant', 'calculating', 'assertive', 'savvy', 'cautious', 'aggressive', 'domineering', 'cunning', 'demanding', 'prudent', 'subtle', 'detached', 'uncertain', 'defensive', 'spineless', 'impassive', 'shrewd', 'business-minded'];

export class Liege extends React.Component {
  render() {
  const liegeRace = liegeRaceOptions[Math.floor(Math.random() * liegeRaceOptions.length)];
  const liegeSex = liegeSexOptions[Math.floor(Math.random() * liegeSexOptions.length)];
  const liegeAge = liegeAgeOptions[Math.floor(Math.random() * liegeAgeOptions.length)];
  const liegePersonality = liegePersonalityOptions[Math.floor(Math.random() * liegePersonalityOptions.length)];

    return (
      <span>The family is led by {liegeRace} {liegeSex} who is {liegeAge} and {liegePersonality}.</span>
    );
  };
};
