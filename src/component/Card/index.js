import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import { CardDiv } from '../../styles';


/** Exemplo de utilização de componete com a props sendo passada como parametro
 * 
 * nesse exemplo de codigo, existe a necessidade de passar a props como 
 * parametro para ser acessada 
 */

const BasicExample = (props) => {
  return (
  
    <div>
   
            <Card style={{ width: '18rem' , margin: "10px 10px 10px 10px"}}>
              <Card.Img variant="top" src={props.img} />
                <Card.Body>
                  <Card.Title>{props.titulo}</Card.Title>
                  <Card.Text>
                      {props.texto}
                  </Card.Text>
                  <Button variant="primary">Enviar</Button>
                </Card.Body>
            </Card>
      
    </div>  

  );
}

export default BasicExample;