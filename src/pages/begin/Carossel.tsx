import Carousel from 'react-bootstrap/Carousel';
import logo  from '../../assets/logo.jpeg'
import CarosselStyle from '../../styles/carrossel/carosselStyle';
import BlockStyle from '../../styles/context_block';
function CarosselBlock() {
  return (
    <BlockStyle>
      <Carousel>
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