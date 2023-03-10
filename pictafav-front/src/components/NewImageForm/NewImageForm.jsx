import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import imagesService from "../../services/images.service"




const NewImageForm = ({ closeModal, refreshList }) => {

    const [imageData, setImageData] = useState({
        title: '',
        imageUrl: ''
    })

    const handleInputChange = e => {
        const { name, value } = e.target
        setImageData({ ...imageData, [name]: value })
    }


    const handleFormSubmit = e => {
        e.preventDefault()

        imagesService
            .saveImage(imageData)
            .then(() => {
                refreshList()
                closeModal()
            })
            .catch(err => console.error(err))
    }

    const { title, imageUrl } = imageData


    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Titulo</Form.Label>
                <Form.Control type="text" value={title} onChange={handleInputChange} name="title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Imagen (URL)</Form.Label>
                <Form.Control type="url" value={imageUrl} onChange={handleInputChange} name="imageUrl" />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit">Guardar Imagen</Button>
            </div>
        </Form>
    )
}

export default NewImageForm