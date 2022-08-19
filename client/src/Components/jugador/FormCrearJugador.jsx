import React from 'react';
import { useState } from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';

const estadoInicial = {
    nombre: '',
    posicion: ''
}

const FormCrearJugador = ({CrearJugadorFn}) => {

    const [formulario, setFormulario] = useState([estadoInicial]);

    const actualizarFormulario = ({target: {name, value}}) => {
        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    const guardarJugador = async e => {
        e.preventDefault();        
        await CrearJugadorFn(formulario);
        setFormulario(estadoInicial);
    }

    return(
        <React.Fragment>
            <Container>
                <Form onSubmit={guardarJugador}>
                    <FormGroup>
                        <Label name='nombre'>Nombre:</Label>
                        <Input type='text' name='nombre' placeholder='Nombre...' required minLength={2} value={formulario.nombre} onChange={actualizarFormulario}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label name='nombre'>Posición:</Label>
                        <Input type='text' name='posicion' placeholder='Posición...' maxLength={30} value={formulario.posicion} onChange={actualizarFormulario}></Input>
                    </FormGroup>
                    <Button color='primary' type='submit'>Crear</Button>
                </Form>                
            </Container>
        </React.Fragment>        
    )

}

export default FormCrearJugador;