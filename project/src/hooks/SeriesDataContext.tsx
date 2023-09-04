import React, { createContext, useContext, useState, useEffect } from 'react';
import SeriesData from '../Series_data.json';


const SeriesDataContext = createContext();
//콘텍스트 생성

// export const SeriesDataProvider = ({ children }) => {
//   const [Seriess, setSeriess] = useState([]);


// // SeriesDataProvider 컴포넌트 내부의 useEffect 안에서 수정
// useEffect(() => {
//   const apiKey = '4f7a2baa745822c7e805100300f62cc6';
//   const apiUrl = `https://api.theSeriesdb.org/3/Series/popular?api_key=${apiKey}`;

//   fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//       const popularSeriess = data.results;
      
//       // popularSeriess 배열을 순회하면서 포스터 이미지 URL을 가져옴
//       const SeriessWithPosters = popularSeriess.map(Series => ({
//         ...Series,
//         posterUrl: `https://image.tmdb.org/t/p/w500/${Series.poster_path}`
//       }));

//       setSeriess(SeriessWithPosters);
//       console.log(SeriessWithPosters);
//     })
//     .catch(error => {
//       console.error('Error fetching Series data:', error);
//     });
// }, []);


//   return (
//     //자식 컴포넌트에 Seriess 를 제공하기위한 프로바이더
//     <SeriesDataContext.Provider value={{ Seriess }}>
//       {children}
//     </SeriesDataContext.Provider>
//   );
// };

// export const useSeriesData = () => {
//   return useContext(SeriesDataContext);
// };

export const SeriesDataProvider = ({ children }) => {
  const [Series, setSeries] = useState([]);

  useEffect(() => {
    const formattedSeries = SeriesData.map(Series => ({
      id: Series.id,
      title: Series.title,
      posterUrl: Series.poster_path,
      overview: Series.overview
    }));

    setSeries(formattedSeries);
  }, []);

  return (
    <SeriesDataContext.Provider value={{ Series }}>
      {children}
    </SeriesDataContext.Provider>
  );
};

export const useSeriesData = () => {
  return useContext(SeriesDataContext);
};