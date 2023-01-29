const router = require("express").Router()


const Image = require("../models/Image.model")

const { isAuthenticated } = require("../middleware/jwt.middleware")


router.post('/saveImage', isAuthenticated, (req, res, next) => {
    const { title, imageUrl } = req.body
    const owner = req.payload
    console.log(req.payload)

    Image
        .create({ title, imageUrl, owner })
        .then(usuario => res.status(201).json(usuario))
        .catch(err => next(err))
})


router.get("/getAllImages", (req, res, next) => {

    Image
        .find()
        // .populate({ path: "owner" })
        .select({ title: 1, imageUrl: 1 })
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => res.status(500).json(err))
})


router.get("/getOneImage/:image_id", isAuthenticated, (req, res, next) => {

    const { image_id } = req.params

    Image
        .findById(image_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.put("/editImage/:image_id", isAuthenticated, (req, res, next) => {
    const { image_id } = req.params
    const { title, imageUrl } = req.body


    Image
        .findByIdAndUpdate(image_id, { title, imageUrl })
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.delete("/deleteImage/:image_id", isAuthenticated, (req, res, next) => {
    const { image_id } = req.params

    Image
        .findByIdAndDelete(image_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})



module.exports = router