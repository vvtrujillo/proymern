import logo from './logo.svg';
import './App.css';
import {Col, Container} from 'reactstrap';
import Main from './Components/Main';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Listado from './Components/jugador/Listado'
import {Routes, Route, Link } from 'react-router-dom';
import FormCrearJugador from './Components/jugador/FormCrearJugador';

function App() {

  const [datos, setDatos] = useState([]);

  const CrearJugador = (obj) => {

    return axios.post('http://localhost:8000/api/v1/jugadores', obj)
      .then(resp => {
        setDatos([...datos, resp.datos.datosJug]);
        return true;
      }).catch(error => {
        Swal.fire('No pudimos crear jugador', error, 'error');
        return false;
      });
  }

  const Eliminar = (nombre, id) => {
    Swal.fire({title:'Eliminar', //Aca colocamos el titulo del mensaje
              text:`Esta seguro de eliminar el Jugador ${nombre}`, //acá colocamos el texto que va a decir en el mensaje
              icon:'question', //aca indicamos el icono del mensaje
              showCancelButton: true, //indicamos si vamos a mostrar el boton "Cancelar" en el mensaje
              confirmButtonText: 'Si, Eliminar' //Texto del boton confirmar la acción del mensaje
              
            })
            .then(resp => {
              if(resp.isConfirmed){
                console.log('dije si al eliminar');
                console.log('eliminar',nombre, id)
                axios.delete(`http://localhost:8000/api/v1/jugadores/${id}`)
                  .then(resp =>{
                    console.log('respuesta',resp)
                    setDatos(datos.filter(d => d._id != id))
                  }).catch(error => Swal.fire('Ooops!!!', error,'Error'))
              }
            })
  }

  //Traemos los datos desde Mongo en relacion a los jugadores.
  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/jugadores')
      .then(resp => {
        if(!resp.data.error){
          //console.log(resp.data.datosJug)
          setDatos(resp.data.datosJug); 
        }else {
          Swal.fire('Ooops!!!', resp.data.mensaje, 'error');
        }        
      })
  }, [])

  return (
    <Container>
      <Main></Main>
      <Listado datos={datos} EliminarFn={Eliminar}></Listado>
      <Col>
        <Link to={'/nuevo'}>Nuevo Jugador</Link>
      </Col>
      <Routes>
        <Route path='nuevo' element={<FormCrearJugador CrearJugadorFn={CrearJugador}></FormCrearJugador>}></Route>
      </Routes>
    </Container>
  );
}

export default App;
