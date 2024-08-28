import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MinecraftStats from "./pages/MinecraftStats";
import Forums from "./pages/Forums";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/stats' element={<MinecraftStats />}></Route>
        <Route path='/forums' element={<Forums />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
