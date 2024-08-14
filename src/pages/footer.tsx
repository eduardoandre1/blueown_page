import styled from "styled-components";
import whatsaap from "../../src/assets/whatsapp.png";

import linkedin from "../../src/assets/linkedin.png";
import instagram from "../../src/assets/instagram.svg";
import telephone from "../../src/assets/telephone-svgrepo-com.svg";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";


function FooterBlock() {
    return (
        <>
            <Footerstyle>
                <footer>
                        <span className="">&copy; 2024 Blueowl Publicidade</span>
                        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                            <li className="ms-3"><a className="text-body-secondary" href="https://www.linkedin.com/in/blueowl-publicidade-8033a5285/"><BsLinkedin className="item"/></a></li>
                            <li className="ms-3"><a className="text-body-secondary" href="#"><BsInstagram className="item"/></a></li>
                            <li className="ms-3"><a className="text-body-secondary" href="#"> <BsWhatsapp className="item" /></a></li>
                        </ul>
                </footer>
            </Footerstyle>
            <SubBlock>
                <a href="https://wa.link/qedlgf"><img src={whatsaap} /><h4>+55(21)97012-4125</h4></a>
                <a href="https://www.linkedin.com/in/blueowl-publicidade-8033a5285/"><img src={linkedin} /><h4>linkedin</h4></a>
                <a href="https://www.instagram.com/eduardoandre418/"><img src={instagram} />  <h4>@eduardo</h4></a>
                <a href="tel:+5521970124125"><img src={telephone} /><h4>+55(21)97012-4125</h4></a>
            </SubBlock>

        </>

    )

}
const Footerstyle = styled.div`
all:unset;
height: 15dvh;
width: 100%;
color: white;
background: #0F0F0F;
padding-top: 60px;
display: flex;
justify-content: center;
align-items: center;
footer{
    height: 80%;
    display: flex;
    flex-direction: row;
    width: 100dvw;
    justify-content: space-between;
    background-color: #0F0F0F;
    color: white;
    border-top: 3px double gray;
    margin-top: 15%;
    margin-bottom: 200px;
    align-items: center;
    padding-left: 5%;
    padding-right: 3%;
    
}
span{
    color: lightgray;
    text-decoration-color:white;
}
.item{
    height: 30px;
    width: 30px;
}
@media (max-width: 768px) {
    display: none;
}
`
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
@media(min-width: 768px){
    display:none;
}

`

export default FooterBlock;