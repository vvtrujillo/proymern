import React from "react";
import { useState } from "react";
import { Route, Router } from "react-router-dom";


const JugadorAdmin = () => {
    
    const[datos, setDatos] = useState([]);

    return(
        <React.Fragment>
            <Router>
                <Route path="Listado" element={<Listado datos={datos}></Listado>}></Route>                
                <Col></Col>
            </Router>
        </React.Fragment>
    )
}

export default JugadorAdmin;