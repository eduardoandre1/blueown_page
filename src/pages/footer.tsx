import styled from "styled-components";
import whatsaap from "../../src/assets/whatsapp.png";

import linkedin from "../../src/assets/linkedin.png";
import instagram from "../../src/assets/instagram.svg";
import telephone from "../../src/assets/telephone-svgrepo-com.svg";

function FooterBlock(){
    return(
            <SubBlock>
                    <a href="https://wa.link/qedlgf"><img src={whatsaap} /><h4>+55(21)97012-4125</h4></a>
                    <a href="https://www.linkedin.com/in/blueowl-publicidade-8033a5285/"><img src={linkedin}/><h4>linkedin</h4></a>
                    <a href="https://www.instagram.com/eduardoandre418/"><img src={instagram}/>  <h4>@eduardo</h4></a>
                    <a href="tel:+5521970124125"><img  src={telephone} /><h4>+55(21)97012-4125</h4></a>
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
background-color: black;

position: fixed;
bottom: 0;
left: 0;
z-index: 15;
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
h4 {
    color:  white;
    font-size: clamp(1px, 1px + 2vw, 1em); ;
    padding: 2px;
    height: 30px;
    display: flex;
    text-align: center;
    align-items: center;
}
h4:hover{
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
        height: 24px;
        width: 24px;
    }
}

`

export default FooterBlock;