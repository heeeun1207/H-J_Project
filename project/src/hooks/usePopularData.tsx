import { useState, useEffect } from 'react';

const usePopularData = () => {
  const [tvPopular, setTvPopular] = useState([]);
  const [moviePopular, setMoviePopular] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const BASE_LANG = 'ko';
    const BASE_REGION = 'KR';
    const apiKey = '4f7a2baa745822c7e805100300f62cc6';
    const tvApiUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=${BASE_LANG}&region=${BASE_REGION}`;
    const movieApiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=${BASE_LANG}&region=${BASE_REGION}`;

    // TV 데이터 가져오기
    fetch(tvApiUrl)
      .then(response => response.json())
      .then(data => {
        setTvPopular(data.results);
      })
      .catch(error => {
        console.error('TV 데이터를 불러오는 중 오류 발생:', error);
      });

    // 영화 데이터 가져오기
    fetch(movieApiUrl)
      .then(response => response.json())
      .then(data => {
        setMoviePopular(data.results);
        setLoading(false); 
      })
      .catch(error => {
        console.error('영화 데이터를 불러오는 중 오류 발생:', error);
      });
  }, []);

  return { tvPopular, moviePopular, loading };
};

export default usePopularData;
