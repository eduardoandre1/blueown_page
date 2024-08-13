import BlockStyle from "../../styles/context_block";
import AboutPage from "../about/AboutPageTurbo";
import ContactPage from "../contacts/contatosPage";
import SolutionsPage from "../solutions/solutionsPage";
//import CarosselBlock from "./Carossel";
import VideoBlock from "./components/videoBlock";

export default function BeginPage(){
    return(
        <BlockStyle>
            <VideoBlock />
            <AboutPage />
            <SolutionsPage />
            <ContactPage />
        </BlockStyle>
    )
}