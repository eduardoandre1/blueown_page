import styled from "styled-components";
const CarosselStyle = styled.div`
height: fit-content;
width: 100%;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
img{
    overflow: hidden;
    height: calc(40dvh - 86px);
    opacity: 1;
}
`

export default CarosselStyle