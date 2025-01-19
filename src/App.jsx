import { Routes, Route, BrowserRouter } from "react-router";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";

import './App.css'

function App() {
  return(
    <BrowserRouter>
      <Routes>
      <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/game" element={}/> */}
        </Route>
      </Routes>
    </BrowserRouter>


  )
}

export default App
