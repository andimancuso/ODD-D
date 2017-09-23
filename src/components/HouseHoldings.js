import React from 'react';

const holdingsSizeOptions = ['modest', 'relatively small', 'appreciable', 'respectable', 'extensive'];

const holdingsFractionOptions = ['half', 'some', 'a third', 'a fourth', 'a fifth', 'only a little'];

export class HouseHoldings extends React.Component {
  render() {
    let holdingsSize = holdingsSizeOptions[Math.floor(Math.random() * holdingsSizeOptions.length)];
    let holdingsFraction = holdingsFractionOptions[Math.floor(Math.random() * holdingsFractionOptions.length)];
    let holdingsMultiplier;

    if (holdingsSize === 'appreciable' || holdingsSize === 'respectable') {
      holdingsMultiplier = 10
    } else if (holdingsSize === 'extensive') {
      holdingsMultiplier = 20 } else {
        holdingsMultiplier = 0
      };

    let holdingsArea = (Math.floor(Math.random() * 9) +1) + holdingsMultiplier;

    return (
      <span>
        The family's holdings are {holdingsSize}, covering roughly {holdingsArea} square miles of land, {holdingsFraction} of which is pure wilderness.
      </span>
    );
  };
};
