import React from 'react';
import { GetVName } from './GetVName';
import { GetCName } from './GetCName';

export const GetName = () => {
  let rand = Math.floor(Math.random() * 2);

  if (rand === 1) {
    return (<span><GetVName /></span>);
  } else {
    return (<span><GetCName /></span>);
  };
};
