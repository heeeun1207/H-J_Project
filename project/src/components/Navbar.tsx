import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import logoImage from '../assets/HJ_logo.png';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='Navbar-container'>
        <img src={logoImage} alt='Navbar-logo' />
        <NavLink to={'/Main'} activeClassName='active'>
          홈
        </NavLink>
        <NavLink to={'/Series'} activeClassName='active'>
          추천: 시리즈
        </NavLink>
        <NavLink to={'/Movies'} activeClassName='active'>
          추천: 영화
        </NavLink>
        <NavLink to={'/TrendingContent'} activeClassName='active'>
          대세 콘텐츠
        </NavLink>
        <NavLink to={'/SavedContent'} activeClassName='active'>
          내가 찜한 콘텐츠
        </NavLink>
        <NavLink to={'/CategorizedContent'} activeClassName='active'>
          검색
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
