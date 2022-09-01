import React, {Component} from "react";
import { Link } from "react-router-dom";
import Header from "../header"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {DivCentral} from './styles'

class Formulario extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: "",
            senha: ""
        }

        this.salvarEmail = this.salvarEmail.bind(this)
        this.enviarFormulario = this.enviarFormulario.bind(this)

    }

    salvarEmail(event) {
        this.setState({email: event.target.value});
    }


    enviarFormulario(event){

        if(this.state.email === "" || this.state.senha === ""){
            alert("Campos vazios! Verifique");
            event.preventDefault();
        }else {
            alert("Login de " + this.state.email);
            event.preventDefault();
        }
      
    }

    render(){
        return (

            <div>
                    <Header nome="Voltar" link=""/>
                        
                    <DivCentral>

                        <Form onSubmit={this.enviarFormulario}>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="exemplo@exemplo.com" value={this.state.email} 
                                onChange={this.salvarEmail}
                                />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={this.state.senha} 
                                onChange={(e) => this.setState({senha: e.target.value})}/>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Enviar
                            </Button>
                        </Form>

                     </DivCentral> 
            </div>
         
        )
    }
    
   
}

export default Formulario;