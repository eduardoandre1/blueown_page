import styled from "styled-components"

export default function APT(){
    return (<PageStyle>
        <div className="positionrelative">
        <div className="moldBox"><h3> frase </h3></div>
        </div>
    </PageStyle>)
}
const PageStyle = styled.section`
display: flex;
flex-direction: column;
width: 100dvw;
height: 100%;
min-height: 100dvh;
justify-content: center;
align-items: center;
.positionrelative{
    position: relative;
}
.moldBox {
    position: relative;
    width: 80dvw;
    height: 500px;
    background-color: black;
    overflow: hidden;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    h3{
        position: absolute;
        z-index: 1;
    }
}
.moldBox::before{
    content: "";
    position: absolute;
    width: 700px;
    height: 700px;
    background: radial-gradient(darkblue ,black);
    animation: animate 3s linear infinite;
    display: flex;
    justify-content: center;
    align-items: center;
}
.moldBox::after{
    content:'';
    position: absolute;
    background-color: black;
    inset: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
}
@keyframes animate {
    0%{transform:translate(-40%,-40%)}
    25%{transform:translate(40%,-40%)}
    50%{transform:translate(40%,40%)}
    75%{transform:translate(-40%,40%)}
    100%{transform:translate(-40%,-40%)}
}

@media(max-width: 768px) {
    padding: 12px;
    .moldBox{
        width: calc(100dvw - 24px);
    }
}
`
