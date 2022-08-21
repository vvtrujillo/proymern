import { Link, Route, Router, Routes } from "react-router-dom";
import { Button, Container, Table, Modal, ModalBody, Form, Label,FormGroup,Input,ModalHeader } from "reactstrap";
import FormEditaJugador from '../jugador/FormEditaJugador';
import { useState, useRef } from "react";

const dataUpdate = {
    nombre:'',
    posicion:''
}

const Listado = ({datos, EliminarFn}) => {



    return(

        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Posición</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datos.map((j,i) => 
                            <tr key={i}>
                                <td>{j.nombre}</td>
                                <td>{j.posicion}</td>
                                <td>
                                    <Link to={`/editar/${j._id}`}>
                                        <Button color="primary" >Editar</Button>
                                    </Link>                                    
                                    <Button color="danger" onClick={e => EliminarFn(j.nombre, j._id)}>Eliminar</Button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>            
        </Container>        
    )
}

export default Listado;