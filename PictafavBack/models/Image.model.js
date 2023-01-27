const { Schema, model } = require("mongoose");

const imageSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'El título es obligatorio.']
        },

        imageUrl: {
            type: String,
        }
    },

    {
        timestamps: true
    }

);


const Image = model("Image", imageSchema)

module.exports = Image