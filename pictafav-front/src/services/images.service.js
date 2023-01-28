import axios from 'axios'

class ImageService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/images`
        })
    }


    getImages() {
        return this.api.get('/getAllImages')
    }

    getOneImage(image_id) {
        return this.api.get(`/getOneImage/${image_id}`)
    }

    saveImage(imageData) {
        return this.api.post('/saveImage', imageData)
    }
}

const imagesService = new ImageService()

export default imagesService