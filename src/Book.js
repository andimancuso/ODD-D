import React from 'react';
import { GetBook } from './components/GetBook'

export class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasBook: false };
    this.toggleState = this.toggleState.bind(this);
  };

  toggleState() {
    const newState = this.state.hasBook ? false : true;
    this.setState({
      hasBook: newState
    })
  };

  render() {
    return (
        <div>
          <p>During your recent adventures, you find a dusty tome with the title:</p>
            <h2 className="book-title">
              <GetBook />
            </h2>
            <button id="button" onClick={this.toggleState}>
              That sounds boring. Give me something else!
            </button>
        </div>
    );
  };
};
