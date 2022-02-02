import React, { } from 'react';

import NavItem from './NavItem';

import { NAV } from '../../../config/config';

import './index.scss';

export default function SideBar(props) {

  const { curIdx, handleNavItemClick } = props;

  return (
    <aside className="side-bar">
      {
        NAV.map((item, index) => {
          return (
            <NavItem
              dataItem={item}
              index={index}
              key={index}
              curIdx={curIdx}
              handleNavItemClick={handleNavItemClick}
            />
          );
        })
      }
    </aside>
  );
}
