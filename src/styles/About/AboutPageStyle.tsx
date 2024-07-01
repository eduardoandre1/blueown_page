import styled from "styled-components";

const AboutStyle = styled.div`
width: 100%;
display: flex;
flex-direction: column;
height: 100%;
align-content: center;
align-self: center;
align-items: center;
margin-bottom: 15px;

img{
    height: 100%;
    border: 5px solid white;
    overflow: hidden;
    border-radius: 50%;
}
h2{
    color: white;
    width: 100%;
    height: 50px;
    z-index: 2;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 60px;
    margin-bottom: 90px;
}
li {
    gap: 10px;
    color: white;
    font-size: 25px;
    text-align: start;
    display: flex;
    justify-content: flex-start;
    max-height: 20%;
    height: fit-content;
    text-align: start;
}
li p{
    width: 80%;
}
li b{
    color: #BAE9FD;
    text-decoration-line: underline;
    text-shadow: 15px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
ol{
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height:650px;
    padding-bottom: 20px;

}
div {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

`
export default AboutStyle