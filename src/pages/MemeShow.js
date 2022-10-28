import React from "react"
import { useParams } from "react-router-dom"
import { Card, CardImg, CardBody, CardColumns, CardSubtitle, CardText, CardTitle, Button } from "reactstrap"

const MemeShow = ({memes}) => {
    
    const { id } = useParams()
    let memesArr = memes.memes


    let showMeme = memesArr[id]
    // let showMeme = memesArr?.find(item => item.id === +id)

    return (

        <>
        Meme Show
        <CardColumns
                        style={{width: '69%',padding: "24px",backgroundColor: "#ded8d1", flex:"wrap" , borderRadius:"10px",margin:"2%"}}>
                        <Card style={{ backgroundColor: " #f2b740" }}>
                            <CardImg
                                alt="Card image cap"
                                src={`${showMeme.url}`}
                                top
                                width="100%"
                            />
                            <CardBody >
                                <CardTitle tag="h5">
                                    {showMeme.title}
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    {`Created by: ${showMeme.author}`}
                                </CardSubtitle>
                    
                                <Button>
                                    I'm a Memer
                                </Button>
                            </CardBody>
                        </Card>
                    </CardColumns>
    
        </>
    )
}

export default MemeShow

