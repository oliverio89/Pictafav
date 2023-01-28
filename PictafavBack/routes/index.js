
module.exports = app => {
  //configurar las rutas

  const authRoutes = require("./auth.routes");
  app.use("/api/auth", authRoutes)

  const userRoutes = require("./user.routes");
  app.use("/api/user", userRoutes)

  const imageRoutes = require("./image.routes");
  app.use("/api/images", imageRoutes)

}