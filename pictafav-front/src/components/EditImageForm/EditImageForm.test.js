import React from "react"
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'
import EditImageForm from "./EditImageForm"
import ImageDetailsPage from "../../pages/ImageDetailsPage/ImageDetailsPage"

beforeEach(() => {
    render(<EditImageForm />)
})

test('render content', () => {


    const title = screen.getByText(/editar imagen/i)
    expect(title).toBeInTheDocument()
    screen.debug()
})

test('should render the form elements', async () => {

    const inputEl = screen.getByLabelText(/titulo/i)
    const btnEl = screen.getByRole('button', { name: /editar imagen/i })

    fireEvent.change(inputEl, { target: { value: 'gato bonito' } })
    fireEvent.click(btnEl)

    render(<ImageDetailsPage />)

    const wordEditEl = await screen.findByText(/gato bonito/i)

    expect(wordEditEl).toBeInTheDocument()


    screen.debug()


})