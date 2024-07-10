import styled from "styled-components";

const BlockStyle = styled.section`
width: 80%;
display: flex;
min-height: 100dvh;
flex-direction: column;
align-items: center;
margin-top: 15px;
background-color: darkblue;
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
}
::-webkit-scrollbar{
    background: red;
    width: 60px;
}
::-webkit-scrollbar-thumb{
    background-color: #0549C6;
}

`
export default BlockStyle