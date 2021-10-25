import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';


const FormularioAdd = ({ dispatch }) => {
    //Agreganos un useState
    const [data, setData] = useState({ nombre: "", numero: "" });

    const { nombre, numero } = data;

    //Definimos la function handleChange
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }

    // Definimos la accion para Add
    const actionAdd = {
        type: "add",
        payload: {
            id: uuid(),
            nombre,
            numero,

        },
    };


    const handleClick = () => {
        //Invocamos al dispatch, todos los dispatch van a tener referencia directa con el reducer a ejecutar, debemos pasarle un action.
        dispatch(actionAdd);
    };

    return (

        <div className="container">

            <label className="mx-1 d-grid gap-2">

                Nombre: {" "}

                <input
                    onChange={handleChange}
                    name="nombre"
                    value={nombre}
                    type="text"
                    className="form-control"
                    autoComplete="off" />

            </label>

            <label className="mx-1 d-grid gap-2">

                Número: {" "}

                <input
                    onChange={handleChange}
                    name="numero"
                    value={numero}
                    type="text"
                    className="form-control"
                    autoComplete="off" />

            </label>

            <div className="mx-1 d-grid gap-2">

                <button onClick={handleClick} className="btn btn-info mt-2">Agregar</button>

            </div>

        </div>

    );

};

export default FormularioAdd;