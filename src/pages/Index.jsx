import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginService from 'services/Login';

import { NAV } from '../config/config';

import Header from '../components/Index/Header';
import SideBar from '../components/Index/SideBar';
import Container from '../components/Index/Container';

const loginService = new LoginService();

export default function IndexPage() {
  const navigate = useNavigate();

  const [navItem, setNavItem] = useState({
    curIdx: 0,
    field: NAV[0].field,
    title: NAV[0].title
  })

  function handleNavItemClick(field, index, title) {
    setNavItem({
      title,
      field,
      curIdx: index
    })
  }

  async function loginCheck() {
    const result = await loginService.loginCheck();
    console.log(result);

    const errorCode = result.error_code;

    if (errorCode === 10006) {
      navigate('/login');
      return;
    }

    navigate('/course');
  }

  useEffect(() => {
    loginCheck();
  }, [])

  return (
    <div className="container">
      <Header />
      <SideBar
        curIdx={navItem.curIdx}
        handleNavItemClick={handleNavItemClick}
      />
      <Container />
    </div>
  );
}