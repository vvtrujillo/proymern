import React, { useState } from "react"
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from "reactstrap"


const EditarJugador = () => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);    

    return(
        <React.Fragment>
            <Button color="primary" onClick={toggle}>Open modal</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader>
                    <h1>Modal Editar Usuario</h1>
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label>Nombre:</Label>
                            <Input type="text" name="nombre" placeholder="Nombre..."></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Nombre:</Label>
                            <Input type="text" name="nombre" placeholder="Nombre..."></Input>
                        </FormGroup>
                        <Button type="submit">Editar</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </React.Fragment>
        
    )
}