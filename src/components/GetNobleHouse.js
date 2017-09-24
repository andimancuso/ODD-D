import React from 'react';
import { Liege } from './NobleHouseHead';
import { HouseAlignment } from './HouseAlignment';
import { HouseInfluence } from './HouseInfluence';
import { HouseHoldings } from './HouseHoldings';
import { FamilySize } from './FamilySize';
import { HouseActivity } from './HouseActivity';
import { NobleSecret } from './NobleSecret';
import { NobleAmbition } from './NobleAmbition';

export class GetNobleHouse extends React.Component {
  render() {
    return (
      <div>
        <div>This particular noble that your tavern neighbors are discussing seems to be quite the character. <NobleAmbition /> <NobleSecret /></div>
        <div><Liege /> <HouseAlignment /> <HouseActivity /></div>
        <div><HouseInfluence /> <HouseHoldings /> <FamilySize /></div>
      </div>
    );
  };
};
