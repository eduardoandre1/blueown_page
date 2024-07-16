import styled from "styled-components"
import BlockStyle from "../../styles/context_block"
import SolutionBlock from "./components/SolutionBlock"

export default function SolutionsPage(){
    return(<BlockStyle>
        <MoldBoxStyle>
            <div className="moldBox">
                <h2>Nos do time BlueOwl temos a solução perfeita para você</h2>
            </div>
        </MoldBoxStyle>
        <StyleSectionRigtSide>
            <SolutionBlock row={'1'} column={'2'} title={'Web Design'}  text={'profissional responsável pela concepção da arquitetura de um site na internet, incluindo a sua estrutura e o aspecto das diversas páginas que o compõem!'} />
            <SolutionBlock row={'2'} column={'1'} title={'Produção de Imagem'} text={'Fazemos todos o Design Gráfico do seu produto ou Marca!'}  />
            <SolutionBlock row={'2'} column={'3'} title={"Marketing"}  text={'É a arte de explorar, criar e entregar valor para satisfazer necessidades e/ou desejos de um mercado consumidor. São usados produtos, serviços ou ideias que possam interessar aos consumidores.'} />
            <SolutionBlock row={'1'} column={'4'} title={"Assessoria"} text={'Ajudamos você em todo o processo da Criação a Divulgação nas Plataformas!'} />
            
        </StyleSectionRigtSide>

    </BlockStyle>)
}
const StyleSectionRigtSide = styled.section`
width: 85dvw;
height: 90dvh;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(2,1fr);
grid-gap: 5px;
`
const MoldBoxStyle = styled.section`
.moldBox {
    margin-top: 20px;
    padding:10px;
    position: relative;
    width: 80dvw;
    height: 20dvh;
    background-color: #0F0F0F;
    overflow: hidden;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto ;
    margin-right: auto;
    margin-bottom: 20px;
}
.moldBox::before{
    content: "";
    position: absolute;
    width: 80dvw;
    height: 80dvh;
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
h1{
    z-index: 1;
}
h2{
    z-index: 2;
    overflow: auto;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
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
