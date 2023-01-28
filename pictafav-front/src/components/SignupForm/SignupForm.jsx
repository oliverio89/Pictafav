import { useState, useContext } from "react"
import { Form, Button } from "react-bootstrap"
import authService from "../../services/auth.service"

import { useNavigate } from 'react-router-dom'




const SignupForm = ({ fireFinalActions }) => {

    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: '',
    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    const navigate = useNavigate()

    const handleSubmit = e => {

        e.preventDefault()

        authService
            .signup(signupData)
            .then((res) => {
                fireFinalActions()
            })
            .catch(err => err)
    }

    const { username, password, email } = signupData

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Nombre de Usuario</Form.Label>
                <Form.Control type="text" minLength={2} value={username} onChange={handleInputChange} name="username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" minLength={3} value={password} onChange={handleInputChange} name="password" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
            </Form.Group>
            <div className="d-grid">
                <Button variant="dark" type="submit" >Registrar</Button>
            </div>

        </Form>


    )
}

export default SignupForm