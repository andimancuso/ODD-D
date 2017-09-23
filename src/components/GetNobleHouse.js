import React from 'react';
import { Liege } from './NobleHouseHead'
import { HouseAlignment } from './HouseAlignment'

export class GetNobleHouse extends React.Component {
  render() {
    const nobleHouseName = this.props.name;

    return (
      <div>The {nobleHouseName} family is led by <Liege />. Overall, the house is <HouseAlignment /> share that alignment.</div>
    );
  };
};
