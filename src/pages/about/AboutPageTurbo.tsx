import styled from "styled-components"
import owlOnHill from "../../assets/owl-in-hill.jpeg"
import imageConections from "../../assets/conectionsLogo.jpeg"
import BlueSession from "./components/blueSectionBlock"
import AlertBlock from "./components/tituloAlert"

export default function AboutPage(){
    return (<PageStyle>

        <div className="moldBox">
            <TextAndImage>
                <img className="image" src={imageConections} alt="" />
                <div className="text">
                    <h2>Quem Nos Somos? </h2>
                    <p>Somos uma agência de talentos em Designer, Marketing e Websites prontos para por em prática suas ideias! Nossa empresa é feita de inovadores  para inovadores,pessoas que buscam a expansão e a conversão de marcas para o digital  </p>
                </div>
            </TextAndImage>
        </div>
        <AlertBlock />
        <BlueSession />
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
.moldBox {
    margin-top: 20px;
    padding:10px;
    position: relative;
    width: 80dvw;
    height: 40dvh;
    background-color: #0F0F0F;
    overflow: hidden;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto ;
    margin-right: auto;
}
.moldBox::before{
    content: "";
    position: absolute;
    width: 80dvw;
    height: 40dvh;
    background: radial-gradient(blue ,black);
    animation: animate 6s linear infinite;
    display: flex;
    justify-content: center;
    align-items: center;
}
.moldBox::after{
    content:'';
    position: absolute;
    background-color: #0F0F0F;
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
        height: 30dvh;
        margin: 0 auto;
        margin-top: 15px;
        

    }
    justify-content: flex-start;
    padding-top: 50px
}
`
const TextAndImage = styled.div`
height: 100%;
width: 100%;
z-index: 1;
padding: 5px;
display: grid;
grid-template-columns: 35% 58%;
grid-gap: 3%;
background-color: #0F0F0F;
.text{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: white;
    h2{
        width: 100%;
        display: flex;
        min-height: 20%;
        height: fit-content;
        justify-content: center;
        align-items: center;
        font-size: clamp(25px, 20px + 2vw, 3em);
        margin-bottom: 15px;
    }
    p{
        width: 100%;
        display: flex;
        text-align: start;
        min-height: 40%;
        justify-content: flex-end;
        font-size:1.4em;
        height: fit-content;
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
            font-size: 12px;
            overflow: auto;
        }
        h2{
            font-size:24px
        }
    }
}
`
