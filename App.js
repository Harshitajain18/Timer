// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Stopwatch from './component/Stopwatch';
import Countdown from './component/Countdown';
import Counter from './component/Counter';
import NavBar from './component/NavBar';
import './component/Style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/counter" element={<Counter/>}></Route>
          <Route path="/stopwatch" element={<Stopwatch />}></Route>
          <Route path='/countdown' element={<Countdown />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
