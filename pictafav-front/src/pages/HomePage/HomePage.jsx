import './HomePage.css'
import Carousel from 'react-bootstrap/Carousel'

const HomePage = () => {

    return (
        <Carousel fade >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.sprachcaffe.com/fileadmin/Redaktion/img/_sprachcaffe/magazine/Magazine_Espanol/heart-3147976_640.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Amor</h3>
                    <p>Guarda tus mejores recuerdos</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.bonitasimagenes.net/wp-content/uploads/2019/03/Frases-bonitas-Facebook-92.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Juntos</h3>
                    <p>A todos los que te rodean</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.psicoactiva.com/wp-content/uploads/2008/06/frases-bonitas-afortunados.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Creciendo</h3>
                    <p>
                        Como persona ante las adversidades
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default HomePage

