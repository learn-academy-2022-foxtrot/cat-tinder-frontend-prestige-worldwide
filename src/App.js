import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import MemeEdit from "./pages/MemeEdit"
import MemeIndex from "./pages/MemeIndex"
import MemeNew from "./pages/MemeNew"
import MemeShow from "./pages/MemeShow"
import NotFound from "./pages/NotFound"
import './App.css'


import mockMemes from "./mockMemes";

const App = () => {

  const [memes, setMemes] = useState([])

  useEffect(() => {
    readMeme()
  }, [])

  const readMeme = () => {
    fetch("http://localhost:3000/memes")
    .then((response) => response.json())
    .then((data) => {
      setMemes(data)
    })
    .catch((error) => console.log(error))
  }

  const createMeme = (newMemes) => {
    console.log("NEW MEME", newMemes)
    fetch("http://localhost:3000/memes", {
      body: JSON.stringify(newMemes),
      header: {
        "Content-Type": "application.json"
      },
      method: "POST"
    })
    .then((response) => response.json())
    .then(() => readMeme())
    .catch((error) => console.log("Meme create errors:", error))
  }

  return (
    <div className="App">
      <div className="App-header">
        <Header/>

        <Routes>
          <Route path="/" element={<Home memes = {memes}/>} />
          <Route path="/index" element={<MemeIndex memes = {memes} />} />
          <Route path="/show/:id" element={<MemeShow memes = {memes}/>} />
          <Route path="/new" element={<MemeNew createMeme = {createMeme}/>} />
          <Route path="/edit" element={<MemeEdit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer/>
      </div>
    </div>
  )
}

export default App;
