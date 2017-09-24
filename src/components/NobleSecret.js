import React from 'react';

const treasonOptions = ['as an independent agent', 'with a foreign power', 'within a dissident element of society', 'with an illegal organization', "with a member of the sovereign's own family", 'with a long-lost heir to the throne'];
const enchantmentOptions = ['a cursed item', 'a ghost', 'a demon', 'a devil', 'a fey creature', 'a magical geas', 'an enchanted item', 'a sorcerer', 'a mind-control spell'];
const orgOptions = ['bandits', 'thieves', 'dangerous mercenaries', 'cultists', 'traitors to the sovereign', 'black market merchants', 'assassins', 'necromancers'];
const titheOptions = ['pay an extortionist', 'amass personal wealth', 'divert funds to a pet project', 'cover their gambling debts', "enlarge their family's treasury", 'pour more money into their business endeavors'];
const stealOptions = ['fish and game', 'natural resources', 'precious minerals', 'livestock', 'timber'];
const addictionOptions = ['an opiate', 'a hallucinogen', 'an illegal stimulant', 'an exotic imported drug', 'a particular kind of alcohol', 'a dangerous magical ritual', 'blood-letting'];

export class NobleSecret extends React.Component {
  render() {

    let nobleSecret = ['has no apparent flaws - but people are suspicious of someone who seems so perfect', 'may be engaged in treasonous activity ' + treasonOptions[Math.floor(Math.random() * treasonOptions.length)], 'perpetrated and then covered up a terrible crime they committed', 'is under the influence of ' + enchantmentOptions[Math.floor(Math.random() * enchantmentOptions.length)], 'has used their station to avoid required military service', 'has a family history of insanity', 'may be afflicted with lycanthropy', 'secretly supports a group of ' + orgOptions[Math.floor(Math.random() * orgOptions.length)], 'may be a member of a group of ' + orgOptions[Math.floor(Math.random() * orgOptions.length)], 'may be addicted to ' + addictionOptions[Math.floor(Math.random() * addictionOptions.length)], 'may be withholding their tithe to the sovereign to ' + titheOptions[Math.floor(Math.random() * titheOptions.length)], "is secretly poaching the sovereign's " + stealOptions[Math.floor(Math.random() * titheOptions.length)]];

    let secret = nobleSecret[Math.floor(Math.random() * nobleSecret.length)];

    return (
      <span>
        In addition, it seems that this individual {secret}.
      </span>
    );
  };
};
