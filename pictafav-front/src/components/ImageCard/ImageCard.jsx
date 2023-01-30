import './ImageCard.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { AuthContext } from './../../contexts/auth.context'
import { useContext } from 'react'


function ImageCard({ title, imageUrl, _id, owner }) {

    const { user } = useContext(AuthContext)

    return (
        (owner._id === user?._id) &&
        <Card className="mb-4 ImageCard">
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Link to={`/detalles/${_id}`}>
                    <div className="d-grid">
                        <Button variant="dark" size="sm">Ver detalles</Button>
                    </div>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default ImageCard