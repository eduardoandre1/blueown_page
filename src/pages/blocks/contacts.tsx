import styled from "styled-components";
import BlockStyle from "../../styles/context_block";
import whatsaap from "../../../src/assets/whatsapp-svgrepo-com.svg";

import linkedin from "../../../src/assets/linkedin-svgrepo-com.svg";
import instagram from "../../../src/assets/instagram-svgrepo-com.svg";
import telephone from "../../../src/assets/telephone-svgrepo-com.svg";

function ContactsBlock(){
    return(
    <BlockStyle>
            <SubBlock>
                    <a href="https://wa.link/qedlgf"><img src={whatsaap} /></a>
                    <a href="https://www.linkedin.com/in/blueowl-publicidade-8033a5285/"><img src={linkedin}/></a>
                    <a href="https://www.instagram.com/eduardoandre418/"><img src={instagram}/></a>
                    <a href="tel:+5521970124125"><img  src={telephone} /></a>
            </SubBlock>
    </BlockStyle>
    ) 
    
}
const SubBlock = styled.div`

display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 100%;
height: 70px;
align-content: center;
align-items: center;
border: 2px solid red;
background-color: #BAE9FD;
border: 2px solid white;
img{
    all: unset;
    height: 25px ;
    width: 25px ;
    border-radius: 50%;
    margin-left: 10px;
}
a{
    all: unset;
}
img:hover{
    transform: scale(1.3);
    background-color: whitesmoke;
}
@media (min-width: 768px) {
    height: 32px;
    width:100%};
    bottom: 0;
    left: 0;
@media (max-width: 768px){
    position: absolute;

}
`

export default ContactsBlock;