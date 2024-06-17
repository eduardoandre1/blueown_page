import BlockStyle from "../styles/context_block";
import PageStyle from "../styles/display_page";

export default function MainPage(){
    return (
        <PageStyle>
            <BlockStyle>
                inicio
            </BlockStyle>
            <BlockStyle>
                sobre 
            </BlockStyle>
            <BlockStyle>
                serviços 
            </BlockStyle>
            <BlockStyle>
                contato
                <a href="https://wa.link/sc5w9c" >whatsaap </a>
            </BlockStyle>
        </PageStyle>
    )
}