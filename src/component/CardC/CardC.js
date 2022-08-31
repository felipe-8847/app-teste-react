import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

/** Exemplo de utilização de componete com class
 * 
 * o exemplo abaixo mostra que a utilização de props já vem como padrao 
 * e para acessar o atributo tem por padrão utilizar o (this) antes do
 * props, exemplo (this.props.atributo)
 */
class BasicExample extends Component {
  render () {
   
    return <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.img}/>
            <Card.Body>
              <Card.Title>{this.props.titulo}</Card.Title>
              <Card.Text>
                  {this.props.texto}
              </Card.Text>
              <Button variant="primary">Enviar</Button>
            </Card.Body>
          </Card>
  };
}

export default BasicExample;