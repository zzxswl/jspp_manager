import React, { } from 'react';

import axios from 'axios';

import './index.scss';

import Logo from './Logo';
import Form from './Form';

export default function Login() {
  return (
    <div className="login-container">
      <Logo />
      <Form />
    </div>
  );
}
