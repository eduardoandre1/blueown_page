import styled from "styled-components"
import BlockStyle from "../styles/context_block"
import FormSubmit from "./emails/formSubmit"
import MapBlock from "./blocks/map"
export default function ContactPage(){
    return (
        <BlockStyle>
            <ContactPageStyle>
            <div className="emailBlockStyle">
                <FormSubmit />
            </div>
            <div className="navigateBlockStyle">
                <MapBlock />
            </div>
            </ContactPageStyle>
        </BlockStyle>
    )
}

const ContactPageStyle = styled.div`
    display: grid;
    width: 95%;
    margin: 0 auto;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: 560px;
    grid-gap: 15px;
    overflow: hidden;
    .block {
    }
    .emailBlockStyle{
    }
    .navigateBlockStyle{
    }
    @media (max-width: 960px){
        grid-template-columns: repeat(1,1fr);
        grid-template-rows: repeat(2,1fr);
    }

`