import React from 'react';

const TablaContactos = ({ contactos = [], dispatch }) => {

    const handleDelete = (id) => {
        //DEfinimos el action
        const deleteAction = {
            type: "delete",
            payload: id,
        };
        dispatch(deleteAction);
    }


    return (
        <div className="row ">
            {contactos.map((contacto) => {
                const finalId = contacto.id.split("-");
                const sizeFoto = { width: '15rem' };
                const textBold = { 'font-weight': 'bold' };
                return (
                    <div className="card" style={sizeFoto}>
                        <div className="card-header">#ID {finalId[0]}</div>
                        <img src={contacto.fotoLink} className='card-img-top' alt="SIn Imagen" />
                        <div className="card-body">
                            <h5 className='card-title'>{contacto.nombre} {contacto.apellido1} {contacto.apellido2}</h5>
                            <p>
                                <span style={textBold}>Correo:</span> {contacto.correo}
                                <br />
                                <span style={textBold}>Teléfono:</span> {contacto.numero}
                                
                            </p>
                            <button
                                onClick={() => handleDelete(contacto.id)}
                                className="btn btn-danger">Eliminar</button>
                        </div>
                    </div>
                );
            })}
        </div >
    );
};

export default TablaContactos;
