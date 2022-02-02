import React, { } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

export default function NavItem(props) {

  const { curIdx, index, dataItem, handleNavItemClick } = props;

  return (
    <div className={['nav-item', index === curIdx ? 'nav-current' : ''].join(' ')}>
      <Link
        to={`/${dataItem.field}`}
        onClick={() => handleNavItemClick(dataItem.field, index, dataItem.title)}
      >
        {dataItem.title}
        <i className="iconfont icon-arrow-right"></i>
      </Link>
    </div>
  );
}
