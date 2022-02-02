import { Link } from 'react-router-dom';

import './index.scss';

export default function HeaderLogo() {
  return (
    <div className="header-logo-wrapper">
      <Link to="/course" className="logo-link"></Link>
    </div>
  );
}
