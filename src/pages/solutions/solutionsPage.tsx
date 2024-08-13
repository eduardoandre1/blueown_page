import styled from "styled-components"
import BlockStyle from "../../styles/context_block"
import SolutionBlock from "./components/SolutionBlock"
import MoldBoxStyle from "../../styles/moldBox"
import BlueSession from "../about/components/blueSectionBlock"

export default function SolutionsPage(){
    return(<BlockStyle>
        <BlueSession />
        <MoldBoxStyle $height="26dvh" $width="">
            <div className="moldBox2">
                <h2>Soluções de diversas areas</h2>
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
width: 95dvw;
height: calc(95dvh + 12px);
display: grid;
grid-template-columns: repeat(4,24.5%);
grid-template-rows: repeat(2,49%);
grid-gap: 5px;
margin-top: 26px;
overflow: visible;
@media (max-width:768px) {
    display: flex;
    flex-direction: column;
    height: fit-content;
    margin-top: 20px;
}
`