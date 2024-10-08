import styled from "styled-components"
import FormBlock from "./emails/formBlock"
import MapBlock from "./components/map"
import VideoBlockTree from "../begin/components/videoBlock3"

export default function ContactPage(){
    return (
    <ContactPageStyle>
            
            <div className="block">
                <div className="subBlock">
                    <FormBlock />
                </div>
                <VideoBlockTree />
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
    padding-top: 100px;
    .block {
        height: 80dvh;
        width: 100dvw;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: relative;
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