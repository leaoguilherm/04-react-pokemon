import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { HomePage } from "../pages/HomePage";
import { DetaisPage } from "../pages/Details";
import { MainStyle } from "../styles/styles";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <MainStyle>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/pokemon/details" element={<DetaisPage />}></Route>
                </Routes>
            </MainStyle>
        </BrowserRouter>
    )
}