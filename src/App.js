import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MemeEdit from "./pages/MemeEdit";
import MemeIndex from "./pages/MemeIndex";
import MemeNew from "./pages/MemeNew";
import MemeShow from "./pages/MemeShow";
import NotFound from "./pages/NotFound";
import './App.css';


import mockMemes from "./mockMemes";

const App = () => {

  const [memes, setMemes] = useState(mockMemes)

  let meme = (memes.memes[0].url)

  return (
    <div className="App">
      <div className="App-header">
        <Header></Header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index" element={<MemeIndex />} />
          <Route path="/show" element={<MemeShow />} />
          <Route path="/new" element={<MemeNew />} />
          <Route path="/edit" element={<MemeEdit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer></Footer>
      </div>
    </div>
  )
}

export default App;
