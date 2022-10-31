
import React, { useState } from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"

const MemeNew = ({ createMeme }) => {

    const navigate = useNavigate()
    const [newMeme, setNewMeme] = useState({
        title: "",
        likes: "",
        dislikes: 0,
        image: "",
        description: "",
    })

    const handleChange = (e) => {
        setNewMeme({ ...newMeme, [e.target.title]: e.target.value })
    }

    const handleSubmit = () => {
        createMeme(newMeme)
        navigate("/index")
    }

    // value={newMeme.title} 
    // value={newMeme.image}
    // value={newMeme.description}
    return(
        <>
            <h1 style={{color: "black"}}>Meme New</h1>
            <Form style={{color: "black"}}>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="text" name="title" onChange={handleChange} placeholder="Enter Meme Title"/>
                </FormGroup>
                <FormGroup>
                    <Label for="image">Image</Label>
                    <Input type="text" name="image" onChange={handleChange} placeholder="Input Meme URL"/>
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="text" name="description" onChange={handleChange} placeholder="Enter Meme Description" />
                </FormGroup>
                <Button onClick={handleSubmit} name="submit">
                    Create Meme
                </Button>
            </Form>
        </>
    )
}

export default MemeNew
