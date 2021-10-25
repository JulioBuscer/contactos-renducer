import React, { useReducer, useEffect } from 'react'
import { ContactosReducer } from '../Reducers/ContactosReducer';
import FormularioAdd from './FormularioAdd';
import TablaContactos from './TablaContactos'

//Definir la funcion de init, donde vamos a recuperar el localstorage 
const init = () => {
    //Definimos el localstorage
    const contactos = localStorage.getItem("contactos");
    return contactos ? JSON.parse(contactos) : [];
}

const Contactos = () => {

    // const reducer = useReducer(ContactosReducer, contactos);
    // console.log(reducer);
    const [state, dispatch] = useReducer(ContactosReducer, [], init);

    // Agregamos un useEffect 
    useEffect(() => {
        //Creamos el localstorage
        localStorage.setItem("contactos", JSON.stringify(state))
    }, [state])

    return (
        <div className="container mt-3">
            <FormularioAdd dispatch={dispatch} />
            <TablaContactos contactos={state} dispatch={dispatch} />
        </div>
    )
}

export default Contactos
