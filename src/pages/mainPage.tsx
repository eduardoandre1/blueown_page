import {LinkImg,ContactLogo } from "../styles/contact_logo";
import BlockStyle from "../styles/context_block";
import PageStyle from "../styles/display_page";
import whatsaap from "../assets/whatsapp-svgrepo-com.svg"
import ContactsBlock from "./blocks/contacts";

export default function MainPage(){
    return (
        <PageStyle>
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