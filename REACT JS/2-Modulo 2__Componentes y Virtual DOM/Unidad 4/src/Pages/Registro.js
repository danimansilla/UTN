import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";


function Registro(){
    const history = useHistory();
    const [form, setForm] = useState({usuario:'',password:''});
    function handleClick(){
        
        history.push("/");
    }
    function handleSubmit(e){
        console.log(form)
        e.preventDefault();
    }
    function handleChange(e){

        const target = e.target;
        const value = target.value
        const name = target.name;

      
        setForm({
            ...form,
            [name] : value});
        
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Usuario</label>
                    <input type="text" name="usuario" value={form.usuario} onChange={handleChange}></input>
                </div>
                
                <div>
                    <label>Contraseña</label>
                    <input type="password" name="password" value={form.password} onChange={handleChange}></input>
                </div>
                <button type="submit">Registrarme</button>
            </form>
            <button onClick={handleClick} >Ir a home</button>
        </div>
    )
}

export default Registro;


