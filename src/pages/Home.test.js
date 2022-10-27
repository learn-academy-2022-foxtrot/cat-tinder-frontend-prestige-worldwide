import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from './Home'

describe("<Home/>", () => {

    test("Renders the Home to the user.", () => {
        render(
            <BrowserRouter>
                <Home/>
            </BrowserRouter>
        )
        const element = screen.getByText("Meme Home")
        expect(element).toBeInTheDocument()
    })

    test("Renders the home image to the user.", () => {
        render(
            <BrowserRouter>
                <Home/>
            </BrowserRouter>
        )
        const img = screen.getByRole("img")
        expect(img).toHaveAttribute("src", "https://i.imgur.com/7b1M6it.jpg")
    })

    test("Renders the Header image to the user.", () => {
        render(
            <BrowserRouter>
                <Home/>
            </BrowserRouter>
        )

        const img = screen.getByRole("img")
        expect(img).toHaveAttribute("src", meme)
    })
})

