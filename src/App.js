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
  const [memeApiData, setMemeApiData] = useState({"count":1,"memes":[{"postLink":"","subreddit":"","title":"","url":"https://i.redd.it/ha31m1oa3gw91.jpg","nsfw":false,"spoiler":false,"author":"","ups":6869,"preview":[""]}]})

  useEffect(() => {
    readMeme()
    getMemes()
  }, [])

  const getMemes = () => {

    fetch('https://meme-api.herokuapp.com/gimme/50')
        .then(response => response.json())
        .then(dataPayload => setMemeApiData(dataPayload))
        .catch(error => console.log(error))

}

  const readMeme = () => {
    fetch("http://localhost:3000/memes")
    .then((response) => response.json())
    .then((data) => {
      setMemes(data)
    })
    .catch((error) => console.log(error))
  }

  const createMeme = (newMeme) => {
    console.log("NEW MEME", newMeme)
    fetch("http://localhost:3000/memes", {
      body: JSON.stringify(newMeme),
      headers: {
        "Content-Type": "application/json"
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
          <Route path="/" element={<Home memeApiData={memeApiData} createMeme = {createMeme}/>} />
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
