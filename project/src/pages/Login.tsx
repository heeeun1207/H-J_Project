import React from 'react';
import '../styles/login.css';
import logoImage from '../assets/HJ_logo.png';
import { useLanguageToggle } from '../hooks/useLanguageToggle.js';
import {useNavigate} from 'react-router-dom';

function Login() {
  const { language, toggleLanguage } = useLanguageToggle();
  const navigate = useNavigate();

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    toggleLanguage(newLanguage);
  };

  const handleBtnClick = () => {
    navigate('/Main'); // 메인 페이지로 이동
  };
  return (
    <div className="login-container">
      <header className="logo-box">
        <img src={logoImage} alt='logo'></img>
        <select value={language} onChange={handleLanguageChange}>
          <option value="ko">한국어</option>
          {/* <option value="en">English</option> */}
        </select>
      </header>
      <main>
        <p>찐플에 오신걸 환영합니다!</p>
        <h1>넷플릭스 추천작을 한눈에</h1>
        <button onClick={handleBtnClick}>추천작 보러가기</button>

      </main>
    </div>
  );
}

export default Login;
