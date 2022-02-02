
import { Outlet } from 'react-router-dom';

import './index.scss';

export default function Board () {
  return (
    <div className="page-board">
      <Outlet />
    </div>
  );
}