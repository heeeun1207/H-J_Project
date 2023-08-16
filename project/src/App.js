import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from '../src/pages/Login.tsx';
import Main from '../src/pages/Main.tsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;