import { Button, Table } from "reactstrap";

const Listado = ({datos, EliminarFn}) => {        

    return(

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
                                <Button color="primary">Editar</Button>
                                <Button color="danger" onClick={e => EliminarFn(j.nombre, j._id)}>Eliminar</Button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </Table>

    )
}

export default Listado;