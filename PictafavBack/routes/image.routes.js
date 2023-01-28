const router = require("express").Router()
const Image = require("../models/Image.model")

const { isAuthenticated } = require("../middleware/jwt.middleware")


router.post('/saveImage', (req, res, next) => {
    const { title, imageUrl } = req.body

    Image
        .create({ title, imageUrl })
        .then((createdImage) => {
            const { title, imageUrl } = createdImage
            const image = { title, imageUrl }
            res.status(201).json({ image })
        })
        .catch(err => next(err));
})

router.get("/getAllImages", (req, res, next) => {

    Image
        .find()
        .select({ title: 1, imageUrl: 1 })
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => res.status(500).json(err))
})


router.get("/getOneImage/:image_id", (req, res, next) => {

    const { image_id } = req.params

    Image
        .findById(image_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.post('/editImage/:id_image', (req, res, next) => {
    const { title, imageUrl } = req.body

    Image
        .create({ title, imageUrl })
        .then((createdImage) => {
            const { title, imageUrl } = createdImage
            const image = { title, imageUrl }
            res.status(201).json({ image })
        })
        .catch(err => next(err));
})

router.delete("/deleteImage/:image_id", isAuthenticated, (req, res, next) => {
    const { image_id } = req.params

    Image
        .findByIdAndDelete(image_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})



module.exports = router