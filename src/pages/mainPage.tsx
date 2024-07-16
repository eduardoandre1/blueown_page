import PageStyle from "../styles/PagesStyle";
import CarosselBlock from "./begin/Carossel";
import FooterBlock from "./footer";
import Menu from "./menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./contacts/contatosPage";
import SolutionsPage from "./solutions/solutionsPage";
import AboutPage from "./about/AboutPageTurbo";
import BeginPage from "./begin/beginPage";

export default function MainPage(){
    return (
            <BrowserRouter>
                <Menu />
                <PageStyle>
                    <Routes>
                        <Route path="/" index element={ <BeginPage />} />
                        <Route path="/contatos" element={ <ContactPage />} />
                        <Route path="/sobre" element={<AboutPage /> } />
                        <Route path="/Soluções" element={<SolutionsPage />} />
                    </Routes>
                </PageStyle>
                <FooterBlock />
            </BrowserRouter>
    )
}