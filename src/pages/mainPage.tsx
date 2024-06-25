import PageStyle from "../styles/display_page";
import CarosselBlock from "./blocks/Carossel";
import ContactsBlock from "./blocks/contacts";
import EmailFormer from "./blocks/emailForm";
import Menu from "./blocks/menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function MainPage(){
    return (
        <PageStyle>
            <Menu />
            <BrowserRouter>
             <Routes>
                <Route path="/" element={ <CarosselBlock />} />
                <Route path="/contatos" element={ <EmailFormer />} />
             </Routes>
            </BrowserRouter>
            <ContactsBlock />
        </PageStyle>
    )
}