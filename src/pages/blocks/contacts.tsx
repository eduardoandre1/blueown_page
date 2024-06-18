import styled from "styled-components";
import BlockStyle from "../../styles/context_block";
import whatsaap from "../../assets/whatsapp-svgrepo-com.svg"

import linkedin from "../../assets/linkedin-svgrepo-com.svg"
import instagram from "../../assets/instagram-svgrepo-com.svg"

function ContactsBlock(){
    return(
    <BlockStyle>
        <h2> contatos </h2>
        <LinkAndMap>
                <a href="https://wa.link/qedlgf"><img src={whatsaap} /></a>
                <a href="https://www.linkedin.com/in/blueowl-publicidade-8033a5285/"><img src={linkedin}/></a>
                <a href="https://www.instagram.com/eduardoandre418/"><img src={instagram}/></a>
        </LinkAndMap>
        <LinkAndMap>
            
        </LinkAndMap>
    </BlockStyle>
    ) 
    
}
const LinkAndMap = styled.div`

display: flex;
flex-direction: row;
width: 50dvw;
height: 400px;
flex-wrap: nowrap;
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
    height: 40px;
    width: 40px;
    background-color: whitesmoke;
}
@media (min-width: 768px) {
    width:100%};
`

export default ContactsBlock;