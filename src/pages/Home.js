
import { useState } from "react"
import { Card, CardImg, CardBody, CardColumns, CardSubtitle, CardText, CardTitle, Button } from "reactstrap"

const Home = ({memes}) => {
    const [ memeApiData, setMemeApiData] = useState([])
    console.log("MEMES: ", memes)
    const getMemes = () => {
    
        fetch(`https://meme-api.herokuapp.com/gimme/10`)
        .then(response => response.json())
        .then(dataPayload => setMemeApiData(dataPayload))
        .catch(errors => console.log(errors))
       
    }
 
    console.log('test', )
    console.log(memeApiData)
    
    return (

        <div className="home-container">
            <h2>Meme Home</h2>
            {memes?.map((meme, index) => {    
                    return(
                    <CardColumns key={index}
                        style={{width: '69%',padding: "24px",backgroundColor: "#ded8d1", flex:"wrap" , borderRadius:"10px",margin:"2%"}}>
                        <Card style={{ backgroundColor: " #f2b740" }}>
                            <CardImg
                                alt="Card image cap"
                                src={`${meme.url}`}
                                top
                                width="100%"
                            />
                            <CardBody >
                                <CardTitle tag="h5">
                                    {meme.title}
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    {`Created by: ${meme.author}`}
                                </CardSubtitle>
                    
                                <Button>
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