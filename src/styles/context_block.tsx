import styled from "styled-components";

const BlockStyle = styled.section`
width: 100dvw;
display: flex;
min-height: fit-content;
height: min-content;
flex-direction: column;
align-items: center;
margin-top: 35px;
overflow-y: scroll;


@media (max-width: 768px) {
    h2{
        font-size: 30px;
    }
}
`
export default BlockStyle