import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import NotFound from './NotFound'

describe("<NotFound/>", () => {

    test("Renders the Not Found page to the user.", () => {
        render(
            <BrowserRouter>
                <NotFound/>
            </BrowserRouter>
        )
        const element = screen.getByText("Meme Not Found")
        expect(element).toBeInTheDocument()
    })

})

