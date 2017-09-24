import React from 'react';
import { GetName } from './nameComponents/GetName';

export class NobleHouseName extends React.Component {
  render() {
    let rand = Math.floor(Math.random() * 4);

    if (rand === 1) {
      return (<div>the <GetName /> family</div>);
    } else if (rand === 2) {
      return (<div>the House of <GetName /></div>);
    } else if (rand === 3){
      return (<div>House <GetName /></div>);
    } else {
      return (<div>Clan <GetName /></div>);
    }

  };
};
