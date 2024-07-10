import styled from "styled-components"
import owlOnHill from "../assets/owl-in-hill.jpeg"
import imageConections from "../assets/conectionsLogo.jpeg"

export default function APT(){
    return (<PageStyle>
        <div className="moldBox">
            <TextAndImage>
                <img className="image" src={imageConections} alt="" />
                <div className="text">
                    <h2>Quem Nos Somos? </h2>
                    <p>Somos uma agência de talentos em Designer, Marketing e Websites prontos para por em prática suas ideias!</p>
                    <p> dfgfdshgfshf</p>
                </div>
            </TextAndImage>
        </div>
        <div className="moldBox">
            <TextAndImage>
                <img className="image" src={owlOnHill} alt="" />
                <div className="text">
                    <h2>Chegue ao topo com o nosso time </h2>
                    <p>Estamos aqui para ajudar a divulgar sua marca de maneira eficaz. Trabalhamos com a mais alta qualidade para garantir que sua mensagem chegue aos seus público-alvo e promova o crescimento de sua empresa. Nossa equipe possui profissionais altamente qualificados e experientes que oferecem serviços personalizados de acordo com as necessidades de nossos clientes.</p>
                </div>
            </TextAndImage>
        </div>

        
    </PageStyle>)
}
const PageStyle = styled.section`
padding-top: 50px;
padding-bottom: 35px;
.moldBox {
    margin-top: 20px;
    padding:10px;
    position: relative;
    width: 80dvw;
    height: 80dvh;
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
    width: 80dvw;
    height: 150dvh;
    background: radial-gradient(blue ,black);
    animation: animate 6s linear infinite;
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
    0%{transform:translate(-55%,-55%)}
    25%{transform:translate(55%,-55%)}
    50%{transform:translate(55%,55%)}
    75%{transform:translate(-55%,55%)}
    100%{transform:translate(-55%,-55%)}
}

@media(max-width: 768px) {
    .moldBox{
        width: 85dvw;
        height: 40dvh;
        margin: 0 auto;
        margin-top: 15px;

    }
    justify-content: flex-start;
    padding-top: 50px
}
`
const TextAndImage = styled.div`
height: calc(100% - 22px);
width: calc(100% - 22px);
z-index: 1;
padding: 5px;
display: grid;
grid-template-columns: 35% 58%;
grid-gap: 3%;
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
@media(max-width: 768px) {
    .text{
        p {
            font-size: clamp(1px,2vw, 1em);
        }
    }
}
`
