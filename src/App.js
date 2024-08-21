import React from 'react';
import HeaderLine from './components/global/HeaderLine';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import "./assets/css/index.css"


function App() {
  return (
    <>
      <Router>
        <HeaderLine />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/filter" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
