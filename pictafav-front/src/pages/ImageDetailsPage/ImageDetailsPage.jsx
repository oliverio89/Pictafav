import { useEffect, useState } from "react"
import { Container, Row, Col, Button, Modal } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import imagesService from "../../services/images.service"
import { useNavigate } from "react-router-dom"
import EditImageForm from "../../components/EditImageForm/EditImageForm"

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

                    <Row>

                        <Col md={{ span: 4 }}>
                            <img src={image.imageUrl} style={{ width: '100%' }} />
                        </Col>

                    </Row>
                    <Button variant="danger" size="sm" onClick={() => deleteImage(image._id)}>Eliminar Imagen</Button>

                    <Button onClick={openModal} variant="dark" size="sm">Editar Imagen</Button>
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
            <Link to="/misimagenes">
                <Button variant="dark">Volver a Mis Imagenes</Button>
            </Link>

        </Container >
    )
}

export default ImageDetailsPage