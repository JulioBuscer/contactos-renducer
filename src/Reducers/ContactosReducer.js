//Definimos el Reducer de contactos como una arrow function que recibe solo dos paramentros que son : un sate y un action.

export const ContactosReducer = (state, action) => {
    // Todo action tiene un tipo para lo cual agregamos un Switch-case para determinar que tipo es.
    switch (action.type) {
        case "add":
            return [...state, action.payload] //Hacemos una copida del state y le agregamos un action.payload que contiene la informacion que contiene la informacion que viene dentro el cual es un objeto con los nuevos datos
        case "delete":
            return state.filter(element => element.id !== action.payload);
        default:
            return state;
    }
}