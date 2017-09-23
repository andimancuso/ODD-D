import React from 'react';

const nameOptions = ['the De Rolo family', 'the House of Vysoren', 'the House of Vord'];

export class NobleHouseName extends React.Component {
  render() {
    let houseName = nameOptions[Math.floor(Math.random() * nameOptions.length)];

    return (
      <div>
      {houseName}
      </div>
    );
  };
};
