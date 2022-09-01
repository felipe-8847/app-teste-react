import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function TextLinkExample(props) {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Navbar Home</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">

          <Navbar.Text>
            <Link to={`/${props.link}`}>{props.nome}</Link>
            <br></br>
            <Link to="/login">Login </Link>
          </Navbar.Text>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;