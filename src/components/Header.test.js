import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'

describe("<Header/>", () => {

    test("Renders the Header text to the user.", () => {
        render(
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        )
        const element = screen.getByText("Prestige Worldwide Memes")
        expect(element).toBeInTheDocument()
    })


    test("Renders the Header Nav to the user.", () => {
        render(
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        )
        const testHeaderNav = screen.getByTestId("testHeaderNav")
        expect(testHeaderNav).toHaveClass("header-container")
    })
})