import React from 'react';

const influenceOptions = ['next to no', 'scant', 'marginal', 'average', 'significant', 'considerable', 'overwhelming', 'an unreasonable amount of', 'little', 'wavering', 'questionable', 'powerful'];

export class HouseInfluence extends React.Component {
  render() {
    let influence = influenceOptions[Math.floor(Math.random() * influenceOptions.length)];

    return (
      <span>
        The noble house as a whole has {influence} influence on its neighboring nobility and its sovereign, which heavily affects how much or little the house and its members can accomplish politically and socially.
      </span>
    );
  };
};
