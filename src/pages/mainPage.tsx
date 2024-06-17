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
                <a href="https://wa.me/21970124125?text=hello word , from blue bird" >whatsaap </a>
            </BlockStyle>
        </PageStyle>
    )
}