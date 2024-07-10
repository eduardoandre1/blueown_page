import styled from "styled-components"
import owlOnHill from "../assets/owl-in-hill.jpeg"

export default function APT(){
    return (<PageStyle>
        <div className="moldBox">
            <div className="textAndImage">
                <img className="image" src={owlOnHill} alt="" />
                <div className="text">
                    <h2>Chegue ao topo com o nosso time </h2>
                    <p>Estamos aqui para ajudar a divulgar sua marca de maneira eficaz. Trabalhamos com a mais alta qualidade para garantir que sua mensagem chegue aos seus público-alvo e promova o crescimento de sua empresa. Nossa equipe possui profissionais altamente qualificados e experientes que oferecem serviços personalizados de acordo com as necessidades de nossos clientes.</p>
                </div>
            </div>
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
.textAndImage{
    height: calc(100% - 22px);
    width: calc(100% - 22px);
    z-index: 1;
    padding: 5px;
    display: grid;
    grid-template-columns: 35% 58%;
    grid-gap: 3%;
}
.text{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    h2{
        width: 100%;
        display: flex;
        height: 20%;
        justify-content: center;
        align-items: center;
        font-size: clamp(10px, 5px + 2vw, 3em);
    }
    p{
        border: 1px solid orange;
        width: 100%;
        height: 75%;
        display: flex;
        text-align: start;
        justify-content: flex-end;
        font-size: clamp(15px, 15px + 6vw, 25px);
    }
}
.image{
    height: 100%;
    width: 100%;
    overflow: hidden;
    border-radius: 5%;
}

.positionrelative{
    position: relative;
}
.moldBox {
    margin-top: 15px;
    padding:10px;
    position: relative;
    width: 80dvw;
    height: 40dvh;
    max-height: 500px;
    background-color: black;
    overflow: hidden;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
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
    .moldBox{
        width: calc(90dvw);
        height: 20dvh;
        margin: 0 auto;
    }
    .text{
        p {
            font-size: clamp(1px,2vw, 1em);
        }
    }
}
`
