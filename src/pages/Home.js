
import { useState  } from "react"
import { Card, CardImg, CardBody, CardColumns, CardSubtitle, CardText, CardTitle, Button } from "reactstrap"
// import mockMemes from "../mockMemes";
import { useNavigate } from "react-router-dom"

const Home = ({ memeApiData, createMeme }) => {




    let memesArr = memeApiData.memes


    const navigate = useNavigate()
    const [addMeme, setNewMeme] = useState({
        title: "",
        likes: "0",
        dislikes: "0",
        image: "",
        description: ""
    })



    const handleSubmit = (index) => {
        console.log(index)
        console.log(memesArr[index].title)
        console.log(`${memesArr[index].author}`)

    
        setNewMeme({...addMeme, 'title': `${memesArr[index]["title"]}`,
        likes: `${memesArr[index].ups}`,
        dislikes: "0",
        image: `${memesArr[index].url}`,
        description: `${memesArr[index].author}`})
        
        console.log(addMeme)
        createMeme(addMeme)
        // navigate("/index")
    }

    return (

        <div className="home-container">
            <h2>Meme Home</h2>
            {memesArr.map((meme, index) => {
                return (
                    <CardColumns key={index}
                        style={{ width: '50%', padding: "24px", backgroundColor: "#ded8d1", flex: "wrap", borderRadius: "10px", margin: "2%" }}>
                        <Card style={{ backgroundColor: " #f2b740" }}>
                            <CardTitle tag="h5" name="title" value={meme.title}>
                                {meme.title}
                            </CardTitle>
                            <CardImg
                                alt="Card image cap"
                                src={`${meme.url}`}
                                top
                                width="100%"
                                name="image"
                                value={meme.url}
                            />
                            <CardBody >

                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                    name="description"
                                    value={meme.author}
                                >
                                    {`Created by: ${meme.author}`}
                                </CardSubtitle>

                                <Button onClick={()=> handleSubmit(index)}>
                                    I'm a Memer
                                </Button>
                            </CardBody>
                        </Card>
                    </CardColumns>
                )
            })}
        </div>
    )
}

export default Home