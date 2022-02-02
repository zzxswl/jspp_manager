import React, { } from 'react';

import './index.scss';

import Title from './Title';
import LoginForm from './LoginForm';

export default function Form() {
  return (
    <div className="form-wrapper">
      <Title />
      <LoginForm />
    </div>
  )
}
