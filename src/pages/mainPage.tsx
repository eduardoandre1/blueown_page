import PageStyle from "../styles/PagesStyle";
import CarosselBlock from "./begin/Carossel";
import FooterBlock from "./footer";
import Menu from "./menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./contacts/contatosPage";
import APT from "./about/AboutPageTurbo";

export default function MainPage(){
    return (
            <BrowserRouter>
                <Menu />
                <PageStyle>
                    <Routes>
                        <Route path="/" index element={ <CarosselBlock />} />
                        <Route path="/contatos" element={ <ContactPage />} />
                        <Route path="/sobre" element={<APT /> } />
                        <Route path="/Soluções" element={<APT />} />
                    </Routes>
                </PageStyle>
                <FooterBlock />
            </BrowserRouter>
    )
}