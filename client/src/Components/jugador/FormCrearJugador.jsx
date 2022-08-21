import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
import Swal from 'sweetalert2';

const estadoInicial = {
    nombre: '',
    posicion: ''
}

const FormCrearJugador = ({CrearJugadorFn, editarJugadorFn}) => {

    const [formulario, setFormulario] = useState([estadoInicial]);

    const navigate = useNavigate();

    const {id} = useParams();

    const actualizarFormulario = ({target: {name, value}}) => {
        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    const guardarJugador = async e => {
        e.preventDefault();
        let respuesta=false;

        if(!id){
            respuesta = await CrearJugadorFn(formulario);
            setFormulario(estadoInicial);
        } else {
            respuesta = await editarJugadorFn(formulario);
            setFormulario(estadoInicial);
        }

        if(respuesta){            
            navigate('/mostrar');
        }                
    }

    useEffect(() => {
        if(id) {
            axios.get(`http://localhost:8000/api/v1/jugadores/${id}`)
                .then(resp => {
                    if(!resp.data.error) {
                        setFormulario(resp.data.datosJug);
                    } else {
                        Swal.fire('Ooops!!!', resp.data.mensaje, 'error');
                    }
                });
        }
    }, []); 

    return(
        <React.Fragment>
            <Container>
                <Form onSubmit={guardarJugador}>
                    <FormGroup>
                        <Label name='nombre'>Nombre:</Label>
                        <Input 
                            type='text'
                            name='nombre'
                            placeholder='Nombre...'
                            required
                            minLength={2}
                            value={formulario.nombre}
                            onChange={actualizarFormulario}>                            
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label name='nombre'>Posición:</Label>
                        <Input
                            type='text'
                            name='posicion'
                            placeholder='Posición...'
                            maxLength={30}
                            value={formulario.posicion}
                            onChange={actualizarFormulario}>                            
                        </Input>
                    </FormGroup>
                    <Button color='primary' type='submit'>Guardar Jugador</Button>
                </Form>                
            </Container>
        </React.Fragment>        
    )

}

export default FormCrearJugador;