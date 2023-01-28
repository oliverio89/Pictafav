import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import MyImages from "../pages/MyImages/MyImages"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/misimagenes" element={<MyImages />} />
        </Routes>
    )
}


export default AppRoutes