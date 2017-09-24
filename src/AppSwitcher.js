import React from 'react';
import { Book } from './Book';
import { NobleHouse } from './NobleHouse';

export const AppSwitcher = () => {
  let rand = Math.floor(Math.random() * 2);

  if (rand === 1) {
    return (<span><NobleHouse /></span>);
  } else {
    return (<span><Book /></span>);
  };
};
