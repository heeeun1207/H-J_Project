import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return(
    <div className='Navbar'>
      <Link to={'/Main'}>홈</Link>
      <Link to={'/Series'}>추천:시리즈</Link>
      <Link to={'/Movies'}>추천:영화</Link>
      <Link to={'/TrendingContent'}>대세 콘텐츠</Link>
      <Link to={'/SavedContent'}>내가 찜한 콘텐츠</Link>
      <Link to={'/CategorizedContent'}>🥹</Link>


    </div>

  )


}

export default Navbar;