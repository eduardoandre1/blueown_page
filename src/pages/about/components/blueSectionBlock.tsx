import styled from "styled-components"


export default function BlueSession(){
    return(
        <BlueSessionStyle>
            <details>
                <summary>Criação de anúncios e Branding!</summary>
            </details>
            <details>
                <summary>Planejamento de Mídia!</summary>
            </details>
            <details>
                <summary>Gerenciamento de Campanhas!</summary>
            </details>
            <details>
                <summary>Otimização de Mídia!</summary>
                <p>sadhsaiudhuasihdui</p>
            </details>
            <details>
                <summary>Design de Publicidade!</summary>
                <p>sadhsaiudhuasihdui</p>
            </details>
        </BlueSessionStyle>
    )
}
const BlueSessionStyle = styled.section`
width: 100dvw;
height: 40dvh;
display: flex;
justify-content: space-between;
flex-direction: column;
margin-top: 60px;
margin-bottom: 20px;
details{
    all:unset;
    background-color:#0448C5 ;
    margin: 0 auto;
    width: 80dvw;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    //animation: shyning 2s linear infinite;
    border-radius:6px;
}
@keyframes shyning {
    0% { transform: scale(0.8)}
    50% { transform: scale(1.0)}
    100% { transform: scale(0.8)}
}
summary{
    font-size: clamp(15px, 6dvw , 40px);
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:8%;
    color: white;
}
`