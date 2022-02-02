import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginService from '../../../../services/Login';
import './index.scss';

const loginService = new LoginService();

export default function Logout() {
  const navigate = useNavigate();

  async function handleLogoutClick() {
    const cfm = window.confirm('确认退出登录吗？');

    if (cfm) {
      const result = await loginService.logoutAction();

      const errorCode = result.error_code;

      if (errorCode === 0) {
        navigate('/login');
      }
    }
  }


  return (
    <span
      className="header-logout"
      onClick={handleLogoutClick}
    >安全退出</span>
  )
}