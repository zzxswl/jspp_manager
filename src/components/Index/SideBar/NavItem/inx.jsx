import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

export default class NavItem extends Component {
  render() {

    const { curIdx, index, dataItem, handleNavItemClick } = this.props;

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
}