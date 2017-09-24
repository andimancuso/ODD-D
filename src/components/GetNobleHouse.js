import React from 'react';
import { Liege } from './NobleHouseHead';
import { HouseAlignment } from './HouseAlignment';
import { HouseInfluence } from './HouseInfluence';
import { HouseHoldings } from './HouseHoldings';
import { FamilySize } from './FamilySize';
import { HouseActivity } from './HouseActivity';
import { NobleSecret } from './NobleSecret';

export class GetNobleHouse extends React.Component {
  render() {
    return (
      <div>
        <div><Liege /> <HouseAlignment /></div>
        <div><HouseInfluence /> <HouseHoldings /> <FamilySize /></div>
        <div><HouseActivity /></div>
        <div><NobleSecret /></div>
      </div>
    );
  };
};
