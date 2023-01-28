import './MyImages.css'
import { useState, useEffect } from "react"
import ImageList from "../../components/ImageList/ImageList"
import Loader from "../../components/Loader/Loader"
import imagesService from "../../services/images.service"
import { Container, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import NewImageForm from '../../components/NewImageForm/NewImageForm'


const MyImages = () => {


    const [images, setImages] = useState()
    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const loadImages = () => {
        imagesService
            .getImages()
            .then(({ data }) => setImages(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadImages()
    }, [])

    return (

        <>
            <Container>
                <h1>Galería de Imagenes</h1>
                <Button onClick={openModal} variant="dark" size="sm">Añadir nueva</Button>
                <hr />
                {!images ? <Loader /> : <ImageList images={images} />}
                <hr />
                <Link to="/">
                    <Button variant="dark">Volver a inicio</Button>
                </Link>
            </Container>

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Nueva Imagen</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewImageForm closeModal={closeModal} refreshList={loadImages} />
                </Modal.Body>
            </Modal>

        </>


    )
}


export default MyImages