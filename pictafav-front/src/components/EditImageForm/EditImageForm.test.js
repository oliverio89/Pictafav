import React from "react"
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import EditImageForm from "./EditImageForm"

jest.mock("../../services/images.service", () => {
    return {
        getImages: jest.fn(() => Promise.resolve(true)),
        getOneImage: jest.fn(() => Promise.resolve(true)),
        saveImage: jest.fn(() => Promise.resolve(true)),
        editImage: jest.fn(() => Promise.resolve(true)),
        deleteImage: jest.fn(() => Promise.resolve(true))
    }
})

let loadDetails
beforeEach(() => {
    loadDetails = jest.fn();
    render(<EditImageForm closeModal={jest.fn} title="pretty-image" imageUrl="http://image.jpg" id='123' loadDetails={loadDetails} />)
})
describe('Edit image tests', () => {
    it('should render the edit button', () => {
        const title = screen.getByText(/editar imagen/i)
        expect(title).toBeInTheDocument()
    })

    it('should render the form elements', async () => {

        const inputEl = screen.getByLabelText(/titulo/i)


        fireEvent.change(inputEl, { target: { value: 'gato bonito' } })


        const wordEditEl = await screen.findByDisplayValue(/gato bonito/i)

        expect(wordEditEl).toBeInTheDocument()


    })

})