import React from 'react';
import '../styles/login.css';
import logoImage from '../assets/HJ_logo.png';
import { useLanguageToggle } from '../hooks/useLanguageToggle.js';

function Login() {
  const { language, toggleLanguage } = useLanguageToggle();
  return (
    <div className="login-container">
      <header className="logo-box">
        <img src={logoImage} alt='logo'></img>
        <button onClick={toggleLanguage}>언어선택</button>
        {language ==='ko' ? '한국어' : 'English'}
        <button>로그인</button>
      </header>
    </div>
  );
}

export default Login;
