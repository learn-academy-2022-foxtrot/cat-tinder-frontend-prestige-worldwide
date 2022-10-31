import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import MemeIndex from './MemeIndex'
import memes from '../mockMemes'

describe("<MemeIndex/>", () => {

    test("Renders card title to the user.", () => {
        render(
            <BrowserRouter>
                <MemeIndex memes = {memes}/>
            </BrowserRouter>
        )
        const element = screen.getByText(/take it easy brother/i)
        expect(element).toBeInTheDocument()
    })
})