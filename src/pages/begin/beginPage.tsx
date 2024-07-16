import BlockStyle from "../../styles/context_block";
import AboutPage from "../about/AboutPageTurbo";
import ContactPage from "../contacts/contatosPage";
import SolutionsPage from "../solutions/solutionsPage";
import CarosselBlock from "./Carossel";

export default function BeginPage(){
    return(
        <BlockStyle>
            <CarosselBlock />
            <AboutPage />
            <SolutionsPage />
            <ContactPage />
        </BlockStyle>
    )
}