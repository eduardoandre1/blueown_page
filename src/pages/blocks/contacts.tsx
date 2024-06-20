import styled from "styled-components";
import BlockStyle from "../../styles/context_block";
import whatsaap from "../../../src/assets/whatsapp-svgrepo-com.svg";

import linkedin from "../../../src/assets/linkedin-svgrepo-com.svg";
import instagram from "../../../src/assets/instagram-svgrepo-com.svg";
import telephone from "../../../src/assets/telephone-svgrepo-com.svg";

function ContactsBlock(){
    return(
    <BlockStyle>
        <h2> contatos </h2>
        <DivBlock>
            <SubBlock>
                    <a href="https://wa.link/qedlgf"><img src={whatsaap} /></a>
                    <a href="https://www.linkedin.com/in/blueowl-publicidade-8033a5285/"><img src={linkedin}/></a>
                    <a href="https://www.instagram.com/eduardoandre418/"><img src={instagram}/></a>
                    <a href="tel:+5521970124125"><img  src={telephone} /></a>
            </SubBlock>
            <SubBlock>
                <form>
                    <label >nome </label>
                    <input type="text" />
                    <label >email </label>
                    <input type="email" />
                </form>
            </SubBlock>
        </DivBlock>
    </BlockStyle>
    ) 
    
}
const DivBlock = styled.div`
display: flex;
flex-direction: row;

`
const SubBlock = styled.div`

display: flex;
flex-direction: column;
width: 50%;
height: 400px;
flex-wrap: nowrap;
border: 2px solid red;
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
    width:100%};
`

export default ContactsBlock;