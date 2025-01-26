import { Routes, Route, BrowserRouter } from "react-router";
import Home from "./pages/Home/Home";
import GameCanvas from "./pages/GameCanvas/GameCanvas";
import Layout from "./pages/Layout/Layout";
import About from "./pages/About/About";

import { useState } from "react";

import './App.css'

function App() {
    const [screen, setScreen] = useState("tutorial_screen");

  return(
    <BrowserRouter>
      <Routes>
      <Route element={<Layout screen={screen} setScreen={setScreen}/>}>
          <Route path="/" element={<Home setScreen={setScreen}/>}/>
          <Route path="/game" element={<GameCanvas screen={screen} setScreen={setScreen}/>}/>
          <Route path="/about" element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>


  )
}

export default App
