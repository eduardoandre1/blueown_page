import BlockStyle from "../../styles/context_block";
import logo from "../../assets/travel_logo.jpeg"
import AboutStyle from "../../styles/About/AboutPageStyle";
function AboutPage(){
    return (
    <BlockStyle>
        <AboutStyle>
            
            <div><h2>venha voar com a gente</h2>
            <p>A melhor propaganda e feita pro clientes satisfeitos.
            Estamos aqui para ajudar a divulgar sua marca de maneira eficaz. 
            Trabalhamos com a mais alta qualidade para garantir que sua mensagem chegue 
            aos seus público-alvo e promova o crescimento de sua empresa. 
            Nossa equipe possui profissionais altamente qualificados e experientes que oferecem serviços 
            personalizados de acordo com as necessidades de nossos clientes. Oferecemos soluções criativas
            para anúncios, mídia, design, campanhas de marketing e muito mais. Estamos comprometidos em fornecer resultados
            excepcionais e serviços de qualidade.</p></div>
            <img src={logo} alt="" />
            
        </AboutStyle>
    </BlockStyle>)
}

export default AboutPage