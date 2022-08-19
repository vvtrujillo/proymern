import React from 'react';
import { useState } from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';

const estadoInicial = {
    nombre: '',
    posicion: ''
}

const FormCrearJugador = ({CrearJugadorFn}) => {

    const [formulario, setFormulario] = useState([estadoInicial]);

    const guardarJugador = async e => {
        e.preventDefault();
        let resp = true;

        resp = await CrearJugadorFn(formulario);
        
    }

    return(
        <React.Fragment>
            <Container>
                <Form onSubmit={guardarJugador}>
                    <FormGroup>
                        <Label name='nombre'>Nombre:</Label>
                        <Input type='text' name='nombre' placeholder='Nombre...' required minLength={2}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label name='nombre'>Posición:</Label>
                        <Input type='text' name='posicion' placeholder='Posición...' maxLength={30}></Input>
                    </FormGroup>
                    <Button color='primary' type='submit'>Crear</Button>
                </Form>
                <hr></hr>
            </Container>
        </React.Fragment>        
    )

}

export default FormCrearJugador;