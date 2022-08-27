import { Link, Route, Router, Routes } from "react-router-dom";
import { Button, Container, Table, Modal, ModalBody, Form, Label,FormGroup,Input,ModalHeader } from "reactstrap";
import FormEditaJugador from '../jugador/FormEditaJugador';
import { useState, useRef } from "react";
import {RiDeleteBin6Line} from 'react-icons/ri'
import {FaRegEdit} from 'react-icons/fa'

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
                                        <FaRegEdit></FaRegEdit>
                                    </Link>                                    
                                    <RiDeleteBin6Line color="red" onClick={e => EliminarFn(j.nombre, j._id)} style={{cursor: "pointer"}}></RiDeleteBin6Line>
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