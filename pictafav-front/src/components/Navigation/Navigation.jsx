
import { Nav, Container, Navbar, Button, Modal } from 'react-bootstrap'

import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import SignupForm from '../SignupForm/SignupForm'
import LoginForm from '../LoginForm/LoginForm'
import { AuthContext } from '../../contexts/auth.context'

import './Navigation.css'

const Navigation = () => {

    const { user, logoutUser } = useContext(AuthContext)

    const [showModal, setShowModal] = useState(false)

    const closeModal = () => setShowModal(false)

    const [showForm, setShowForm] = useState('')

    const SignUp = () => {
        setShowForm('signup')
        setShowModal(true)
    }

    const LogIn = () => {
        setShowForm('login')
        setShowModal(true)

    }

    const Navigate = useNavigate()

    const fireFinalActions = () => {

        Navigate('/')
        closeModal()
    }
    const logout = () => {
        logoutUser()
        Navigate('/')
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className='circle'>
                <Link to="/">
                    <Nav.Link as="div"><h1>PictaFav</h1></Nav.Link>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {!user ?
                            <>
                                <div className='con-btnStart'>
                                    <Button onClick={SignUp} variant="dark btnStart" size="sm"> Registrate </Button>
                                </div>

                                <Modal show={showModal} onHide={closeModal}>
                                    <div className='btnSigLog'>
                                        <Button onClick={SignUp} variant="dark" size="sm">Registrate</Button>
                                        <Button onClick={LogIn} variant="dark" size="sm">Ingresa</Button>
                                    </div>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Welcome to Pictafav!</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        {showForm === 'signup' && <SignupForm fireFinalActions={fireFinalActions} />}
                                        {showForm === 'login' && <LoginForm fireFinalActions={fireFinalActions} />}
                                    </Modal.Body>
                                </Modal>
                            </>
                            :
                            <>
                                <Link to="/misimagenes">
                                    <Nav.Link as="div">Mis Imagenes</Nav.Link>
                                </Link>
                                <>
                                    <Nav.Link as="div" onClick={logout}>Cerrar sesión</Nav.Link>
                                </>
                            </>

                        }
                    </Nav>
                    <Nav.Link as="div">¡Hola, {!user ? 'invitad@' : user.username}!</Nav.Link>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation

