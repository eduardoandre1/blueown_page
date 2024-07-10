import PageStyle from "../styles/display_page";
import AboutPage from "./AboutPage";
import CarosselBlock from "./blocks/Carossel";
import FooterBlock from "./blocks/footer";
import Menu from "./blocks/menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./contatosPage";
import APT from "./AboutPageTurbo";

export default function MainPage(){
    return (
            <BrowserRouter>
                <PageStyle>
                    <Menu />
                        <Routes>
                        <Route path="/" index element={ <CarosselBlock />} />
                        <Route path="/contatos" element={ <ContactPage />} />
                        <Route path="/sobre" element={<APT /> } />
                        <Route path="/Soluções" element={<APT />} />
                        </Routes>
                    <FooterBlock />
                </PageStyle>
            </BrowserRouter>
    )
}