import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from '../src/pages/Login.tsx';
import Main from '../src/pages/Main.tsx';
import Series from '../src/pages/Series.tsx';
import Movies from '../src/pages/Movies.tsx';
import TrendingContent from '../src/pages/TrendingContent.tsx';
import SavedContent from '../src/pages/SavedContent.tsx';
import CategorizedContent from './pages/CategorizedContent.tsx';
import { SeriesDataProvider } from './hooks/SeriesDataContext.tsx';
import { MovieDataProvider } from './hooks/MovieData.tsx';
import { WatchListProvider } from './hooks/WatchListContext.tsx';



function App() {
  return (
    <BrowserRouter>
    <MovieDataProvider>
    <SeriesDataProvider>
    <WatchListProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/Series" element={<Series />} />
        <Route path="/Movies" element={< Movies/>} />
        <Route path="/TrendingContent" element={<TrendingContent />} />
        <Route path="/SavedContent" element={<SavedContent />} />
        <Route path="/CategorizedContent" element={<CategorizedContent />} />
        </Routes>
    </WatchListProvider>
    </SeriesDataProvider>
    </MovieDataProvider>
    </BrowserRouter>
  );
}

export default App;