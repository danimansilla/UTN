import React from 'react';

function Ciudad(){
    return(
    
        <div style={{display: "block"}}>
        <div className="row"> 
            <div className="ciudadDiv">
                <label className="label"
                  style={{
                    width: "90%",     
                    color: "white",
                    padding: "14px 20px",
                    margin: "8px 0",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer"
                }}>Ciudad</label>
                <input type="text" className="form-control-plaintext" id="ciudad" value="Libertad" disabled
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
</div>
      
    )
}
export default Ciudad;