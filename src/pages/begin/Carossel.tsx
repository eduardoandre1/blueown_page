import Carousel from 'react-bootstrap/Carousel';
import logo  from '../../assets/logo.jpeg'
import CarosselStyle from '../../styles/carrossel/carosselStyle';
import BlockStyle from '../../styles/context_block';
import MoldBoxStyle from '../../styles/moldBox';
function CarosselBlock() {
  return (
    <BlockStyle>
      <MoldBoxStyle $height='20dvh'$width=''>
        <div className='moldBox'>
          <h2> Venha ser time #BlueOwl</h2>
        </div>
      </MoldBoxStyle>
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