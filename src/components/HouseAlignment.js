import React from 'react';

const alignmentOptions = ['lawful good', 'neutral good', 'chaotic good', 'lawful neutral', 'true neutral', 'chaotic neutral', 'lawful evil', 'neutral evil', 'chaotic evil'];

const strayOptions = ['though few', 'and many', 'and most of the family members', 'but almost none of the family', 'and roughly half of the family members'];

export class HouseAlignment extends React.Component {
  render() {
    let alignment = alignmentOptions[Math.floor(Math.random() * alignmentOptions.length)];
    let alignmentStray = strayOptions[Math.floor(Math.random() * strayOptions.length)];

    return (
      <span>{alignment}, {alignmentStray}</span>
    );
  };
};
