import styled from "styled-components"
import BlueSession from "./components/blueSectionBlock"
import MoldBoxStyle from "../../styles/moldBox"
import VideoBlock from "../begin/components/videoBlock"
import VideoBlockTwo from "../begin/components/videoBlock2"

export default function AboutPage(){
    return (<PageStyle>

        <div className="moldBox">
            <TextAndImage>
                <div className="text">
                    <h2 className="titulo1">Quem Nos Somos? </h2>
                    <p>Somos uma agência de talentos em Designer, Marketing e Websites prontos para por em prática suas ideias! Nossa empresa é feita de inovadores  para inovadores,pessoas que buscam a expansão e a conversão de marcas para o digital  </p>
                    <p>A Blue Owl Publicidade oferece serviços de publicidade modernos e criativos, para ajudar sua empresa a crescer. Nossa equipe altamente qualificada utiliza as últimas técnicas de marketing para criar anúncios atraentes e de alto impacto.</p>
                </div>
            </TextAndImage>
        </div>
        <VideoBlockTwo />
        <div className="moldBox">
            <TextAndImage>
                <div className="text">
                    <h2 className="titulo1">Chegue ao topo com o nosso time </h2>
                    <p>Participamos de todos os processos juntos como uma família! Implementamos exatamente oque nosso cliente pede. Com o nosso time de talentos conseguiremos alcançar rapidamente sua meta.</p>
                    <p>Trabalhamos com a mais alta qualidade para garantir que sua mensagem chegue aos seus público-alvo e promova o crescimento de sua empresa. Nossa equipe possui profissionais altamente qualificados e experientes que oferecem serviços personalizados de acordo com as necessidades de nossos clientes.</p>
                </div>
            </TextAndImage>
        </div>
    </PageStyle>)
}
const PageStyle = styled.section`
.moldBox {
    margin-top: 15dvh;
    margin-bottom: 15dvh;
    padding:10px;
    position: relative;
    width: 90dvw;
    height: 60dvh;
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
    height: 60dvh;
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
        height: 60dvh;
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
display: flex;
flex-direction: column;
justify-content: flex-start;
background-color: #0F0F0F;
position: relative;

.text{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    z-index: 2;
    font-smooth: 2px;
    .titulo1{
        width: 100%;
        display: flex;
        height: fit-content;
        justify-content: center;   
        align-items: center;
        font-size: 3dvw;
        font-family: 'Rubik Mono One';
        text-shadow: #0F0F0F 2px 2px ;
        text-align: start;
        margin-top: 5%;
    }
    .title2{
        width: 100%;
        display: flex;
        height: fit-content;
        min-height: 20%;
        font-size: 3dvw;
        font-family: 'Rubik Mono One';
        text-shadow: #0F0F0F 2px 2px ;
        text-align: start;
        margin: 0 auto;

    }
    p{
        width: 90%;
        display: flex;
        text-align: start;
        min-height: 40%;
        justify-content: flex-end;
        font-size:1.2em;
        color: white;
        font-family: 'Poppins';
        height: fit-content;
        
        text-shadow: #0F0F0F 2px 2px ;
        margin: 0 auto;
        justify-self: center;
    }
}
.image{
    height: 100%;
    width: 100%;
    position: absolute;
    opacity: 0.5;
}
@media(max-width: 768px) {
    .moldbox{
        height: 80dvh;
    }
    .text{
        padding: 5%;
        p {
            font-size: 0.7em;
            margin: 0 auto;
        }
        .title1{
            font-size:0.8em;
        }
        .title2{
            font-size: 2em;
        }
        
    }
    
}
`
