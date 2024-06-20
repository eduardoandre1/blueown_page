import styled from "styled-components";

const MenuStyle = styled.header`

box-shadow: rgba(0 0 0 / 75%) 0px 0px 13px 30px -12px;
width: 100dvw;
height: 80px;
padding: 0px auto;
background-color: #0256D2;
display: flex;
justify-content: center;
img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid white
}
img:hover {
    transform: scale(1.5) ;
    
}
nav{
    background-color: #0256D2;
    width: 95dvw;
    height: 80px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
}
`
export default MenuStyle