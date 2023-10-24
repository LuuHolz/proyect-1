export const AppReducer = (state, action) => {
    switch (action, type) {
        case 'SET_PRODUCTOS':
            return{
                ...state,
                productos: action.payload
            }

            // casos de AGREGAR Y ELIMINAR

            default: return state;
    }
}