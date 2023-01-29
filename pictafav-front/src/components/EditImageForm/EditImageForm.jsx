import { useState } from "react"
import { Form, Button, } from "react-bootstrap"
import imagesService from "../../services/images.service"


const EditImageForm = ({ closeModal, title, imageUrl, id, loadDetails }) => {


    const [imageEditData, setImageEditData] = useState({
        title: title,
        imageUrl: imageUrl,
        id: id,
    })



    const handleInputChange = e => {
        const { name, value } = e.target
        setImageEditData({ ...imageEditData, [name]: value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        imagesService
            .editImage(imageEditData)
            .then(() => {
                closeModal()
                loadDetails()
            })
            .catch(err => (err))
    }


    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Titulo</Form.Label>
                <Form.Control type="text" value={imageEditData.title} onChange={handleInputChange} name="title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Imagen (URL)</Form.Label>
                <Form.Control type="url" value={imageEditData.imageUrl} onChange={handleInputChange} name="imageUrl" />
            </Form.Group>

            <div className="d-grid">
                <Button variant="warning" type="submit" >Editar Imagen</Button>
            </div>
        </Form>
    )
}

export default EditImageForm