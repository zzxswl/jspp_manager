import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import LoginService from '../../../../services/Login';

import { trimSpace } from '../../../../utils/tools';

import './index.scss';

const loginService = new LoginService();

export default function LoginForm() {

  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    username: '',
    password: ''
  });


  function handleInputChange (e) {
    const id = e.target.id;
    const value = e.target.value;

    setUserInfo(userInfo => ({
      ...userInfo,
      [id]: value
    }));
  }

  async function handleLoginSubmit () {
    const { username, password } = userInfo;

    if (trimSpace(username).length <= 0) {
      alert('用户名长度不正确');
      return;
    }

    if (trimSpace(password).length <= 0) {
      alert('密码长度不正确');
      return;
    }

    const result = await loginService.loginAction({
      username: trimSpace(username),
      password: trimSpace(password)
    });

    const errorCode = result.error_code;
    const errorMsg = result.error_msg;

    if (errorCode !== 0) {
      alert(errorMsg + `(errorCode: ${errorCode})`);
      return;
    }
    alert('登陆成功');

    navigate('/');
  }

  async function loginCheck () {
    const result = await loginService.loginCheck();

    const errorCode = result.error_code;

    if (errorCode === 10007) {
      navigate('/');
    }
  }

  useEffect(() => {
    loginCheck();
  })

  return (
    <div className="login-form-wrapper">
      <div className="input-box">
        <label htmlFor="username" className="iconfont icon-user"></label>
        <input
          id="username"
          className="login-input"
          type="text"
          placeholder="管理员用户名"
          onChange={handleInputChange}
        />
      </div>
      <div className="input-box">
        <label htmlFor="password" className="iconfont icon-lock"></label>
        <input
          id="password"
          className="login-input"
          type="password"
          placeholder="管理员密码"
          onChange={handleInputChange}
        />
      </div>
      <div className="input-box">
        <button onClick={handleLoginSubmit} className="btn btn-primary">登陆后台</button>
      </div>
    </div>
  );
}