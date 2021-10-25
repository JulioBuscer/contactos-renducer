import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';


const FormularioAdd = ({ dispatch }) => {
    //Agreganos un useState
    const [data, setData] = useState({ nombre: "", apellido1: "", apellido2: "", numero: "", correo: "", fotoLink: "" });

    const { nombre, apellido1, apellido2, numero, correo, fotoLink } = data;

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
            apellido1,
            apellido2,
            numero,
            correo,
            fotoLink

        },
    };


    const handleClick = () => {
        //Invocamos al dispatch, todos los dispatch van a tener referencia directa con el reducer a ejecutar, debemos pasarle un action.
        dispatch(actionAdd);
        setData({ nombre: "", apellido1: "", apellido2: "", numero: "", correo: "", fotoLink: "" });
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
                Primer Apellido: {" "}
                <input
                    onChange={handleChange}
                    name="apellido1"
                    value={apellido1}
                    type="text"
                    className="form-control"
                    autoComplete="off" />
            </label>

            <label className="mx-1 d-grid gap-2">
                Segundo Apellido: {" "}
                <input
                    onChange={handleChange}
                    name="apellido2"
                    value={apellido2}
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

            <label className="mx-1 d-grid gap-2">
                Correo: {" "}
                <input
                    onChange={handleChange}
                    name="correo"
                    value={correo}
                    type="email"
                    className="form-control"
                    autoComplete="off" />
            </label>


            <label className="mx-1 d-grid gap-2">
                Link de Foto: {" "}
                <input
                    onChange={handleChange}
                    name="fotoLink"
                    value={fotoLink}
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


