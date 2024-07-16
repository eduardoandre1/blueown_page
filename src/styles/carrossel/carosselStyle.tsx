import styled from "styled-components";
const CarosselStyle = styled.div`
height: fit-content;
width: 100%;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
margin-top: 30px;
img{
    overflow: hidden;
    height: calc(50dvh - 86px);
    opacity: 1;
}
`

export default CarosselStyle