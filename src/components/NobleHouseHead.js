import React from 'react';

const liegeRaceOptions = ['an elf', 'a dwarf', 'a human', 'a dragonborn', 'a half-elf', 'a half-orc', 'a halfling', 'a gnome', 'a tiefling', 'an aasimar', 'a genasi'];

const liegeSexOptions = ['man', 'woman', 'androgyne'];

const liegeDescOptions = ['old and crotchety', 'young and impulsive'];

export class Liege extends React.Component {
  render() {
  const liegeRace = liegeRaceOptions[Math.floor(Math.random() * liegeRaceOptions.length)];
  const liegeSex = liegeSexOptions[Math.floor(Math.random() * liegeSexOptions.length)];
  const liegeDesc = liegeDescOptions[Math.floor(Math.random() * liegeDescOptions.length)];

    return (
      <span>{liegeRace} {liegeSex} who is {liegeDesc}</span>
    );
  };
};
