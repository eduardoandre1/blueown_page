import styled from "styled-components";

const BlockStyle = styled.section`
width: 100dvw;
display: flex;
min-height: fit-content;
flex-direction: column;
align-items: center;
margin-top: 35px;
overflow-y: scroll;
h2{
    width: 100%;
    justify-content: center;
    align-items: center;
    color: #B1E3FC;
    text-align: center;
    font-size: 60px;
    margin-top: 10px;
    margin-bottom: 40px;
    height: 70px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media (max-width: 768px) {
    h2{
        font-size: 30px;
    }
}
`
export default BlockStyle