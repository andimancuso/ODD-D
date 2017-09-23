import React from 'react';
import { Liege } from './NobleHouseHead';
import { HouseAlignment } from './HouseAlignment';
import { HouseInfluence } from './HouseInfluence';
import { HouseHoldings } from './HouseHoldings';
import { FamilySize } from './FamilySize';

export class GetNobleHouse extends React.Component {
  render() {
    return (
      <div><Liege /> <HouseAlignment /> <HouseInfluence /> <HouseHoldings /> <FamilySize /></div>
    );
  };
};
