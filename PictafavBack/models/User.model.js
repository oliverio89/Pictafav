const { Schema, model } = require("mongoose");

const userSchema = new Schema(

  {
    username: {
      type: String,
      required: [true, 'El nombre es obligatorio'],
      unique: true
    },
    email: {
      type: String,
      required: [true, 'El email es obligatorio'],
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: [true, 'La contraseña es obligatoria'],
      minlength: [5, 'La contraseña debe tener mínimo 5 caracteres']
    }
  },

  {
    timestamps: true
  }

);


const User = model("User", userSchema);

module.exports = User;

