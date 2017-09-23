import React from 'react';

const capturedOptions = ['outlaws', 'bandits', 'criminals', 'spies', 'a wild monster', 'humanoid rabble'];
const laudedOptions = ['staunch loyalty', 'shrewd politicking', 'Midas touch on the local economy'];
const deathOptions = ['of natural causes', 'in battle', 'in an unexpected accident', 'under questionable circumstances', 'from illness', 'from old age', 'in a duel'];
const expeditionOptions = ['the local wilderness', 'a foreign country', 'another continent', "the sovereign's holdings", 'an allied noble house', 'a nearby city', 'a well-known trade route'];
const agreementOptions = ['a truce', 'a mutual defense pact', 'a diplomatic agreement', 'a trade agreement', 'an alliance', 'a peace', 'a surrender', 'a major purchase of land', 'a political marriage'];
const resourceOptions = ['precious metals', 'gemstones', 'deposits of ore', 'magical artifacts', 'historical ruins', 'a cache of ancient treasure', 'mysterious healing waters', 'gold deposits', 'silver deposits', 'platinum deposits', 'iron deposits'];
const wildernessOptions = ['outlaws', 'bandits', 'squatters', 'refugees', 'fugitives', 'a wandering monster', 'poachers', 'savage beasts', 'a mysterious cult'];
const ransomOptions = ['a foreign enemy', 'a rival noble house', 'outlaws', 'rebels', 'an unknown kidnapper', 'a criminal organization'];
const duelOptions = ['won a duel', 'lost a duel', 'fought a duel to a draw', 'challenged a rival noble to a duel'];
const lostMoneyOptions = ['an heirloom being stolen', 'taking a business risk and not beating the odds', 'doing business with deceitful individuals', 'a raid on their treasury', 'a rival noble undermining their business', 'a freak arcane accident that resulted in considerable cost to repair and smooth over', 'having to pay a number of medical experts to tend one of their family members', "paying a ridiculous ransom for one of the family's beloved pets"];
const endangeredOptions = ['plague', 'a natural disaster', 'a lack of food', 'a lack of water', 'bandits', 'military attack', 'a maddened monster', 'poison in the water', 'drought', 'a massive fire', 'flood', 'an influx of dangerous beasts', 'blocked roads', 'a sudden uprising of necromancy'];
const snubbedOptions = ['poor military performance', 'poor business decisions', 'late tithes', "disrupting the sovereign's court", 'a romantic scandal with a foreign dignitary', 'failing to expand their holdings'];

export class HouseActivity extends React.Component {
  render() {

  const recentActivityOptions = ['was lauded by the sovereign for their ' + laudedOptions[Math.floor(Math.random() * laudedOptions.length)], 'achieved an overwhelming military victory', 'established a new vassal', 'drove away a rampaging monster', 'slew a maurading monster', 'had one of their own captured by ' + capturedOptions[Math.floor(Math.random() * capturedOptions.length)], 'captured ' + capturedOptions[Math.floor(Math.random() * capturedOptions.length)], 'celebrated a birth in the family', 'mourned the loss of a family member who died ' + deathOptions[Math.floor(Math.random() * deathOptions.length)], 'was afflicted by plague', 'suffered a military defeat', 'welcomed back one of their own from an expedition to ' + expeditionOptions[Math.floor(Math.random() * expeditionOptions.length)], 'brokered ' + agreementOptions[Math.floor(Math.random() * agreementOptions.length)] + ' on behalf of their sovereign', 'discovered a valuable commodity in the form of ' + resourceOptions[Math.floor(Math.random() * resourceOptions.length)], 'had a family member ransomed by ' + ransomOptions[Math.floor(Math.random() * ransomOptions.length)], 'was forced to presume that one of their adventuring family members was lost or dead', 'lost money as a result of ' + lostMoneyOptions[Math.floor(Math.random() * lostMoneyOptions.length)], 'was snubbed by their sovereign for ' + snubbedOptions[Math.floor(Math.random() * snubbedOptions.length)], duelOptions[Math.floor(Math.random() * duelOptions.length)], 'had one of their vassals endangered by ' + endangeredOptions[Math.floor(Math.random() * endangeredOptions.length)], 'discovered that the wilderness within their lands has been frequented by ' + wildernessOptions[Math.floor(Math.random() * wildernessOptions.length)]];

    let recentActivity = recentActivityOptions[Math.floor(Math.random() * recentActivityOptions.length)];

    return (
      <div><br />
        Most recently, the family {recentActivity}.
      </div>
    );
  };
};
