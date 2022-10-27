import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Footer from './Footer'

describe("<Footer/>", () => {

    test("Renders the Footer to the user.", () => {
        render(
            <BrowserRouter>
                <Footer/>
            </BrowserRouter>
        )
        const element = screen.getByText("Go Home")
        expect(element).toBeInTheDocument()
    })

})

