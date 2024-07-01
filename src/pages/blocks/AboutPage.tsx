import BlockStyle from "../../styles/context_block";
import logo from "../../assets/travel_logo.jpeg"
import AboutStyle from "../../styles/About/AboutPageStyle";
import claws from "../../../public/owl_claws.jpeg";
import eyes from "../../../public/owl_eyes.jpeg";
function AboutPage(){
    return (
    <BlockStyle>
        <AboutStyle>
            
            <div>
                <h2>Nossos ideais</h2>
                <ol>
                    <li><img src={claws} alt="" /><b>Garra afiada:</b><p>Ná blue owl acreditamos que nossa  melhor propaganda é nossos clientes satisfeitos</p>  </li>
                    <li><img src={eyes} alt="" /><b>Visão noturna:</b><p> Trabalhamos com a mais alta qualidade para garantir que sua mensagem chegue 
                    aos seus público-alvo e promova o crescimento de sua empresa.</p></li>
                    <li><img src={logo} alt="" /><b>Não escale,   voe alto:</b><p> Nossa equipe possui profissionais altamente qualificados e experientes que oferecem serviços 
                    personalizados de acordo com as necessidades de nossos clientes. </p></li>
                </ol>
            </div>
            
        </AboutStyle>
    </BlockStyle>)
}

export default AboutPage