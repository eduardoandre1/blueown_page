import styled from "styled-components";

const AboutStyle = styled.div`
width: 100%;
display: flex;
flex-direction: row;
height: calc(90dvh - 100px);
overflow: hidden;
flex-wrap: nowrap;
border: 5px solid orange;
justify-content:space-between;
align-content: center;
align-items: center;
align-self: center;
img{
    width: 30%;
    overflow: hidden;
    border: 15px solid white;
    border-radius: 50%;
    margin-right: 15px;
}
h2{
    color: white;
    width: 100%;
}

div {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    border: 1px solid black;
}
p{
    border: 1px solid black;
    font-size: 1em;
    width: 100%;

}
`
export default AboutStyle