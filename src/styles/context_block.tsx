import styled from "styled-components";

const BlockStyle = styled.div`
width: 80%;
height: calc(90dvh - 90px);
display: flex;
flex-direction: column;
margin-top: 15px;
background-color: #0549C6;
margin-top:120px;
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