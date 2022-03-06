import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../views/MainPage";


export default function AppRouters() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}/>
            </Routes>
        </BrowserRouter>
    )

}