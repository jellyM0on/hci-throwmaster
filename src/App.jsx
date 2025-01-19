import { Routes, Route, BrowserRouter } from "react-router";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";
import Layout from "./pages/Layout/Layout";

import { useState } from "react";

import './App.css'

function App() {
    const [screen, setScreen] = useState("mode_selection");

  return(
    <BrowserRouter>
      <Routes>
      <Route element={<Layout screen={screen}/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/game" element={<Game screen={screen} setScreen={setScreen}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>


  )
}

export default App
