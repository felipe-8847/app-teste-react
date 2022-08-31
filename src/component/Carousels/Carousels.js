import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const UncontrolledExample = (props) => {

      return <Carousel>
              { props.lista.map((e) => (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={e.img}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>{e.titulo}</h3>
                      <p>{e.texto}</p>
                    </Carousel.Caption>
                  </Carousel.Item>

                ))}
             </Carousel>
}

export default UncontrolledExample;