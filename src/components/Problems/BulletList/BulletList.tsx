import React from 'react';
import { ListItem } from './ListItem/ListItem';

export const BulletList = () => {
  return (
    <ul className="problems-list">
      <ListItem
        text="Депрессия"
        image="./img/sprite/symbol-defs-opti.svg#stress_2"
      />
    </ul>
  );
};
