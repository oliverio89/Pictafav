import axios from 'axios'

class ImageService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/images` || 'http://localhost:5005/api/images'
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
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
    editImage(imageData) {
        return this.api.put(`/editImage/${imageData.id}`, imageData)
    }

    deleteImage(image_id) {
        return this.api.delete(`/deleteImage/${image_id}`)
    }
}

const imagesService = new ImageService()

export default imagesService