import React, { useState, useEffect } from 'react';

const Component = () => {
    const [lista, setLista] = useState<string[]>([])

    const add = () => {

        setLista([...lista, "abacaxi"])


    }


    return (
        <button onClick={add} >
            {lista.map((item) => item)}
        </button>
    )
}

export default Component;