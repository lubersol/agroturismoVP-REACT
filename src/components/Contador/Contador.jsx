import React, { useState } from 'react';


const Contador = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Seleccionar habitaciones {count} rooms</p>
            <button onClick={() => setCount(count + 1)}>Número
            </button>
        </div>
    );
}

export default Contador;
