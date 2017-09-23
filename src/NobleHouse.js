import React from 'react';

export class NobleHouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newHouse: false };
    this.toggleState = this.toggleState.bind(this);
  };

  toggleState() {
    const newState = this.state.newHouse ? false : true;
    this.setState({
      newHouse: newState
    })
  };

  render() {
    return (
        <div>
          <p>You finally rest your weary feet in the inn of a new town.<br/>You overhear patrons talking about one of the local noble families,</p>
            <h2 className="noble-house">
              De Rolo
            </h2>
            <div className="noble-desc">
            You're pretty sure this noble house is completely corrupt.
            </div>
            <button id="button" onClick={this.toggleState}>
              These people are awful. Try again!
            </button>
        </div>
    );
  };
};
