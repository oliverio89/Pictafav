import { useEffect, useState } from "react"
import { Container, Row, Col, Button, Modal } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import imagesService from "../../services/images.service"
import { useNavigate } from "react-router-dom"
import EditImageForm from "../../components/EditImageForm/EditImageForm"
import './ImageDetailsPage.css'

const ImageDetailsPage = () => {

    const [image, setImage] = useState()

    const { image_id } = useParams()

    useEffect(() => {
        imagesService
            .getOneImage(image_id)
            .then(({ data }) =>
                setImage(data)
            )
            .catch(err => (err))
    }, [])

    const navigate = useNavigate()

    const [showModal, setShowModal] = useState(false)
    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const loadDetails = () => {
        imagesService
            .getOneImage(image_id)
            .then(({ data }) =>
                setImage(data)
            )
            .catch(err => (err))
    }

    const deleteImage = (image_id) => {

        imagesService
            .deleteImage(image_id)
            .then(() => navigate('/misimagenes'))
            .catch(err => err)

    }



    return (

        <Container>

            {!image ?
                <h1>CARGANDO</h1>
                :
                <>
                    <h1 className="mb-4">Detalles de {image.title}</h1>
                    <hr />

                    <Row className="justify-content-md-center">

                        <Col >
                            <img src={image.imageUrl} />
                        </Col>

                    </Row>


                    <Button onClick={openModal} variant="warning" size="sm">Editar Imagen</Button>

                    <Button variant="danger" size="sm" onClick={() => deleteImage(image._id)}>Eliminar Imagen</Button>
                    <Modal show={showModal} onHide={closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Editar Imagen</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <EditImageForm closeModal={closeModal} title={image.title} imageUrl={image.imageUrl} id={image._id} loadDetails={loadDetails} />
                        </Modal.Body>
                    </Modal>

                </>

            }

            <hr />
            <Row>
                <Link to="/misimagenes">
                    <Button variant="dark">Volver a Mis Imagenes</Button>
                </Link>
            </Row>
        </Container >
    )
}

export default ImageDetailsPage