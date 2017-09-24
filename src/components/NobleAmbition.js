import React from 'react';

const priorityOptions = ['expansion', 'warfare', 'diplomacy', 'rooting out dissidents', 'establishing new trade routes', 'establishing peace among neighboring kingdoms'];
const landOptions = ['in a strategic location', 'that has a valuable resource'];
const killOptions = ['a rival noble', 'a secular official', 'a temple leader', 'a high-level bureaucrat', 'a powerful adventurer', 'a local hero', 'a corrupted noble', 'a black market merchant', 'someone in their own family'];
const marryOptions = ['wealth', 'love', 'political advantage', 'lust', 'nefarious purposes', 'business reasons'];
const fortOptions = ['defensive wall', 'defense tower', 'watch tower', 'high-walled keep', 'military outpost', 'large gate', 'moat'];
const buildOptions = ['bridge', 'road', 'gate', 'watch tower', 'signal beacon', 'bridge', 'guard outpost'];
const fameOptions = ['adventuring', 'exploring', 'amassing wealth', 'military conquest', 'political influence', 'accruing treasure', 'diplomatic relations'];

export class NobleAmbition extends React.Component {
  render() {

    let nobleAmbition = ['advance the local temple', "support the sovereign's top priority of " + priorityOptions[Math.floor(Math.random() * priorityOptions.length)], 'acquire more land ' + landOptions[Math.floor(Math.random() * landOptions.length)], 'dispose of ' + killOptions[Math.floor(Math.random() * killOptions.length)], 'marry into a particular noble family for ' + marryOptions[Math.floor(Math.random() * marryOptions.length)], 'bring about political reform', 'bring local criminals to justice', 'establish a new settlement', 'clear a stain on their family name', 'build a fortification, specifically a ' + fortOptions[Math.floor(Math.random() * fortOptions.length)], 'build more infrastructure, particularly a ' + buildOptions[Math.floor(Math.random() * buildOptions.length)], 'make a name for their family through ' + fameOptions[Math.floor(Math.random() * fameOptions.length)]];

    let ambition = nobleAmbition[Math.floor(Math.random() * nobleAmbition.length)];

    return (
      <span>
          Publicly, they are seeking to {ambition}.
      </span>
    );
  };
};
