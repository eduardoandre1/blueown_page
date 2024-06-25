import styled from "styled-components";
import whatsaap from "../../../src/assets/whatsapp-svgrepo-com.svg";

import linkedin from "../../../src/assets/linkedin-svgrepo-com.svg";
import instagram from "../../../src/assets/instagram-svgrepo-com.svg";
import telephone from "../../../src/assets/telephone-svgrepo-com.svg";

function ContactsBlock(){
    return(
            <SubBlock>
                    <a href="https://wa.link/qedlgf"><img src={whatsaap} /><h4>+55 (21)97012-4125</h4></a>
                    <a href="https://www.linkedin.com/in/blueowl-publicidade-8033a5285/"><img src={linkedin}/><h4>linkedin</h4></a>
                    <a href="https://www.instagram.com/eduardoandre418/"><img src={instagram}/>  <h4>@eduardo</h4></a>
                    <a href="tel:+5521970124125"><img  src={telephone} /><h4>+55 (21)97012-4125</h4></a>
            </SubBlock>
    ) 
    
}
const SubBlock = styled.div`

display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 100dvw;
height: 30px;
align-content: center;
align-items: center;
background-color: #BAE9FD;
border: 2px solid white;

position: fixed;
bottom: 0;
left: 0;
img{
    all: unset;
    height: 20px ;
    width: 20px ;
    border-radius: 50%;
    margin-left: 10px;
    
}
a{
    all: unset;
    display: flex;
    flex-direction: row;
    gap: 2px;
    align-items: center;
}
a h4 {
    color:  #0448C5;
    font-size: smaller;
    padding: 2px;
    height: 30px;
    display: flex;
    text-align: center;
    align-items: center;
}
h4:hover{
    font-size:small;;
    color: white,
}
a:hover{
    img {
        transform: scale(1.3);
        background-color: whitesmoke;
    }
    
}
@media (max-width: 768px) {
    height: 32px;
    img{
        height: 12px;
        width: 12px;
    }
}
`

export default ContactsBlock;