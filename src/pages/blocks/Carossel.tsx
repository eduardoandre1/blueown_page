import Carousel from 'react-bootstrap/Carousel';
import logo  from '../../assets/logo.jpeg'
import CarosselStyle from '../../styles/carrossel/carosselStyle';
import BlockStyle from '../../styles/context_block';
import aviso  from "../../../public/Aviso de promoção loja moderno rose instagram story.png"
import noticia from "../../../public/Promoção Leve Pague Post para Instagram Amarelo e Preto.jpg"
function CarosselBlock() {
  return (
    <BlockStyle>
      <Carousel>
      <Carousel.Item >
        <CarosselStyle>
            <img src={noticia} alt="" />
        </CarosselStyle>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <CarosselStyle>
            <img src={aviso} alt="" />
        </CarosselStyle>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <CarosselStyle>
            <img src={logo} alt="" />
        </CarosselStyle>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </BlockStyle>
    
  );
}

export default CarosselBlock;