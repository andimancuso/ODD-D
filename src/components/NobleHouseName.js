import React from 'react';

const nameOptions = ['De Rolo', 'Vysoren', 'Vord'];

export class NobleHouseName extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  };

  render() {
    let houseName = nameOptions[Math.floor(Math.random() * nameOptions.length)];

    return (
      <div value={houseName}>
      {houseName}
      </div>
    );
  };
};
