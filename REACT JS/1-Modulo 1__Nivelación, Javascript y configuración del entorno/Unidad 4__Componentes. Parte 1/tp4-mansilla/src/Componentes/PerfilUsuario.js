import React from 'react';
import Nombre from './Nombre';
import Foto from './Foto';
import Ciudad from './Ciudad';
function PerfilUsuario(){
    return (
        <div className="row" style={{  display: "flex", background: "black",margin: "5px"}}>
                <div className="column" style={{flex: "40%",  padding: "10px",height: "300px" }} >
                        <Nombre />
                        <Ciudad />
                </div>
                <div className="column" style={{flex: "50%",  padding: "10px",height: "300px" }}>
                        <Foto />
                </div>
        </div>
    )
}
export default PerfilUsuario;


 