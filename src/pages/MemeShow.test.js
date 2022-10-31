import { render, screen } from '@testing-library/react'
import { BrowserRouter, MemoryRouter, Routes, Route } from 'react-router-dom'
import MemeShow from './MemeShow'
import memes from '../mockMemes'

describe("<MemeShow/>", () => {

    test("Renders specific meme to user.", () => {
        render(
            <MemoryRouter initialEntries={['/show/1']}>
                {/* <BrowserRouter> */}
                    <Routes>
                        <Route path='/show/:id' element={<MemeShow memes = {memes}/>}/>
                    </Routes>
                {/* </BrowserRouter> */}
            </MemoryRouter>
        )
        const element = screen.getByText(/take it easy brother/i)
        expect(element).toBeInTheDocument()
    })
})