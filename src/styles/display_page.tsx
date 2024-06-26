import styled from "styled-components";
import backgroundImage from "../../public/pexels-felixmittermeier-956999.jpg"

const PageStyle = styled.div`
width: 100dvw;
min-height: 100dvh;
background: #0448C5 url(${backgroundImage}) repeat-y;
background-size: 100dvw 100dvh;
color: black;
display: flex;
flex-direction: column;
align-content: center;
align-items: center;
padding: 0 auto;

`
export default PageStyle

