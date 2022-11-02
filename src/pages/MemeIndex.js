import { Card, CardImg, CardBody, CardColumns, CardSubtitle, CardText, CardTitle, Button } from "reactstrap"

const MemeIndex = ({ memes }) => {

    return (
        <>
            <h1>MemeShow</h1>
                {memes?.map((meme, index) => {    
                    return(
                    <CardColumns key={index}
                        style={{width: '45%',padding: "24px",backgroundColor: "#ded8d1", flex:"wrap" , borderRadius:"10px",margin:"2%"}}>
                        <Card style={{ backgroundColor: " #f2b740" }} >
                                         <CardTitle tag="h5">
                                    {meme.title}
                                </CardTitle> 
                                <a style={{cursor: 'pointer'}} href={`/show/${meme.id}`}>
                                        <CardImg 
                                alt="Card image cap"
                                src={`${meme.image}`}
                                top
                                width="100%"
                            />
                            </a>
                    
                            <CardBody >
                  
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    {`Created by: ${meme.description}`}
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