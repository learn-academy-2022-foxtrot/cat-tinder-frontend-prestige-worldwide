import { Card, CardImg, CardBody, CardColumns, CardSubtitle, CardText, CardTitle, Button } from "reactstrap"

const MemeIndex = ({ memes }) => {

    let memeArr = memes.memes
    console.log(memeArr)
    return (
        <>
            <h1>MemeShow</h1>
                {memeArr.map((meme, index) => {    
                    return(
                    <CardColumns key={index}
                        style={{width: '69%',padding: "24px",backgroundColor: "#ded8d1", flex:"wrap" , borderRadius:"10px",margin:"2%"}}>
                        <Card style={{ backgroundColor: " #f2b740" }} >
                            <a style={{cursor: 'pointer'}} to={`/show/${meme}`}>
                                        <CardImg 
                                alt="Card image cap"
                                src={`${meme.url}`}
                                top
                                width="100%"
                            />
                            </a>
                    
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
        </>
    )
}

export default MemeIndex