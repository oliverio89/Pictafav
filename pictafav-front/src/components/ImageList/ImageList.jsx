import { Col, Row } from "react-bootstrap"
import ImageCard from "../ImageCard/ImageCard"

const ImageList = ({ images }) => {

    return (
        <Row>
            {images.map(elm => {
                return (
                    <Col sm={{ span: 4 }} key={elm._id} >
                        <ImageCard {...elm} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default ImageList