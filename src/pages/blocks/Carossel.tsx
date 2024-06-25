import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import logo  from '../../assets/logo.jpeg'
import CarosselStyle from '../../styles/carrossel/carosselStyle';
function CarosselBlock() {
  return (
    <Carousel>
      <Carousel.Item >
        <CarosselStyle>
            <img src={logo} alt="" />
        </CarosselStyle>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item >
      <CarosselStyle>
            <img src={logo} alt="" />
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
  );
}

export default CarosselBlock;