import React from 'react';

const sizeOptions = ['relatively small', 'somewhat small', 'medium-sized', 'average in size', 'rather large'];

export class FamilySize extends React.Component {
  render() {
    let size = sizeOptions[Math.floor(Math.random() * sizeOptions.length)];
    let familyMultiplier;

    if (size === 'rather large') {
      familyMultiplier = 12;
    } else if (size === 'medium-sized' || size === 'average in size') {
      familyMultiplier = 6;
    } else {
      familyMultiplier = 0;
    };

    let familyNumber = (Math.floor(Math.random() * 5 + 1) * 2) + familyMultiplier;

    return (
      <span>
        The family is {size}, with {familyNumber} individuals claiming a noble title.
      </span>
    );
  };
};
