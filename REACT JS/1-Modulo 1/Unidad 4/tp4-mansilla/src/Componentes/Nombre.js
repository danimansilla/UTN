import React from 'react';

function NombreComponente(){

    return ( 
                <div className="row" style={{padding: "40px 0px"}}> 
                 
                    <div className="divNombre">
                        <label className="label"
                        style={{
                            width: "90%",     
                            color: "white",
                            padding: "14px 20px",
                            margin: "8px 0",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer"
                        }}>Nombre</label>
                        <input type="text" className="form-control-plaintext" id="nombre" value="Angela Mansilla" disabled
                        style=
                        {{
                        width: "90%",
                        padding: "12px 20px",
                        margin: "8px 0",
                        display: "inline-block",
                        border: "1px solid #ccc",
                        borderRadius: "4px"}}></input>

                    </div>
                </div>
    )
}
export default NombreComponente;