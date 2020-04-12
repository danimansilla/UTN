import React, { useState, useEffect } from 'react';

function EjmploConHook(){
//declaramos una variable de estado, la cual llamaremos  'count'
//useState es un hook en react y el mismo lo usaremos para el manejo de estados
const [count, setCount] = useState(0);
    useEffect(()=> {
        document.title = `Tu clicliaste con hooks ${count}`;
    }
    )
    return (
        <div>
            <p>Tu clic {count} en hook </p>
            <button onClick={()=> setCount(count+1)}>
                clicleame
            </button>
        </div>
    );
}
export default EjmploConHook;