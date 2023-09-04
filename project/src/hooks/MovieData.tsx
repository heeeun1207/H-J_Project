import React, { createContext, useContext, useState, useEffect } from 'react';
import MovieData from '../Movie_data.json';

const MovieDataContext = createContext();


// function App(){
//   const [dataList, setDataList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);


// useEffect(()=>{
//   const apiKey = '4f7a2baa745822c7e805100300f62cc6';
//   const BASE_LANG = 'ko';
//   const BASE_REGION = 'KR';
//   const searchTerms = ["","멍뭉이"];

//   const fetchData = async (term) => {
//     try {
//       const searchTermString = encodeURIComponent(term);
//       const apiUrl = `https://api.theMoviedb.org/3/search/Movie?api_key=${apiKey}&query=${searchTermString}&language=${BASE_LANG}&region=${BASE_REGION}`;

//       const response = await fetch(apiUrl);
//       if (!response.ok) {
//         throw new Error('API request failed');
//       }

//       const data = await response.json();
//       return data;
//     } catch (error) {
//       throw error;
//     }
//   };

//   const fetchDataForAllTerms = async () => {
//     try {
//       const searchData = await Promise.all(searchTerms.map(fetchData));
//       setDataList(searchData);
//       setLoading(false);
//     } catch (error) {
//       setError(error);
//       setLoading(false);
//     }
//   };

//   fetchDataForAllTerms();
// }, []);

// return (
//   <div>
//     {loading ? (
//       <p>Loading...</p>
//     ) : error ? (
//       <p>Error: {error.message}</p>
//     ) : (
//       <div>
//         {dataList.map((data, index) => (
//           <p key={index}>Data {index + 1}: {JSON.stringify(data)}</p>
//         ))}
//       </div>
//     )}
//   </div>
// );
// }

// export default App;

export const MovieDataProvider = ({ children }) => {
  const [Movie, setMovie] = useState([]);

  useEffect(() => {
    const formattedMovie = MovieData.map(Movie => ({
      id: Movie.id,
      title: Movie.title,
      posterUrl: Movie.poster_path,
      overview: Movie.overview
    }));

    setMovie(formattedMovie);
  }, []);

  return (
    <MovieDataContext.Provider value={{ Movie }}>
      {children}
    </MovieDataContext.Provider>
  );
};

export const useMovieData = () => {
  return useContext(MovieDataContext);
};