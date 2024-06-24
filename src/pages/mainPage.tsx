import BlockStyle from "../styles/context_block";
import PageStyle from "../styles/display_page";
import ContactsBlock from "./blocks/contacts";
import EmailFormer from "./blocks/emailForm";
import Menu from "./blocks/menu";

export default function MainPage(){
    return (
        <PageStyle>
            <Menu />

            <BlockStyle>
                <EmailFormer />
            </BlockStyle>
            <ContactsBlock />
        </PageStyle>
    )
}