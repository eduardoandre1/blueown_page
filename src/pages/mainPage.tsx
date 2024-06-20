import BlockStyle from "../styles/context_block";
import PageStyle from "../styles/display_page";
import ContactsBlock from "./blocks/contacts";
import Menu from "./blocks/menu";

export default function MainPage(){
    return (
        <PageStyle>
            <Menu />
            <BlockStyle>
                <h2>inicio</h2>
            </BlockStyle>
            <BlockStyle>
                <h2>sobre</h2> 
            </BlockStyle>
            <BlockStyle>
                <h2>serviços</h2>
            </BlockStyle>
            <ContactsBlock />
        </PageStyle>
    )
}