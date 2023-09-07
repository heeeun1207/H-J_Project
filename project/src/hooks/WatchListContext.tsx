import React, { createContext, useContext, useState, useEffect } from 'react';
import WatchList from '../Watchlist_data.json';

const WatchListContext = createContext();

export const WatchListProvider = ({ children }) => {
  const [List, setList] = useState([]);

  useEffect(() => {
    const formattedList = WatchList.map(List => ({
      id: List.id,
      title: List.title,
      posterUrl: List.poster_path,
      overview: List.overview
    }));

    setList(formattedList);
  }, []);

  return (
    <WatchListContext.Provider value={{ List }}>
      {children}
    </WatchListContext.Provider>
  );
};

export const useWatchList = () => {
  return useContext(WatchListContext);
};