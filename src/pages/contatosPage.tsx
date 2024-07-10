import styled from "styled-components"
import FormSubmit from "./emails/formSubmit"
import MapBlock from "./blocks/map"
export default function ContactPage(){
    return (
    <ContactPageStyle>
            <div className="block">
                <div className="subBlock">
                <FormSubmit />
                </div>
                <div className="subBlock">
                <MapBlock />
                </div>
            </div>
    </ContactPageStyle>
    )
}

const ContactPageStyle = styled.div`
    display: flex;
    width: 100dvw;
    height: min-content;
    min-height: 100dvh;
    padding-top: 100px;
    padding-bottom: 40px;
    .block {
        height: 80dvh;
        width: 100dvw;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .subBlock {
        width: 50%;
        height: 100%;
    }
    @media (max-width: 768px){
        padding-top: 60px;
        .block{
            flex-direction: column;
            height: min-content;
            justify-content: flex-start;
        }
        .subBlock{
            width: 100%;
            height: auto;
        }
    }

`