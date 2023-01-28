import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import MyImages from "../pages/MyImages/MyImages"
import ImageDetailsPage from "../pages/ImageDetailsPage/ImageDetailsPage"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/misimagenes" element={<MyImages />} />
            <Route path="/detalles/:image_id" element={<ImageDetailsPage />} />
        </Routes>
    )
}


export default AppRoutes