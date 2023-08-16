import React from 'react';
import '../styles/login.css';
import logoImage from '../assets/HJ_logo.png';

function Login() {
  return (
    <div className="login-container">
      <header className="logo-box">
        <img src={logoImage} alt='logo'></img>
        
        <button>로그인</button>
      </header>
    </div>
  );
}

export default Login;
