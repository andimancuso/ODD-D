import React from 'react';
import { NobleHouseName } from './components/NobleHouseName';
import { GetNobleHouse } from './components/GetNobleHouse';

export class NobleHouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newHouse: false, name: '' };
    this.toggleState = this.toggleState.bind(this);
    this.changeName = this.changeName.bind(this);
  };

  toggleState() {
    const newState = this.state.newHouse ? false : true;
    this.setState({
      newHouse: newState
    })
  };

  changeName(newName) {
    this.setState({
      name: newName
    })
  };

  render() {
    return (
        <div>
          <p>You finally rest your weary feet in the inn of a new town.<br/>
          You overhear patrons talking about one of the local noble families,</p>
            <h2 className="noble-house">
              <NobleHouseName onChange={this.changeName} />
            </h2>
            <div className="noble-desc">
              <GetNobleHouse name={this.state.name} />
            </div>
            <button id="button" onClick={this.toggleState}>
              These people are awful. Try again!
            </button>
        </div>
    );
  };
};
