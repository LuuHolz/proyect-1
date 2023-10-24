import React, { useReducer } from "react";
import { AppReducer } from './Reducer';
import { AppContext } from './Context';

const initialState = {
    productos: [],
    carrito: []
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // llamada a la API 

    const apiCall = async () =>{
        try{
          const respuesta = await fetch ('https://api.escuelajs.co/api/v1/products')
          const data = await respuesta.json();

          dispatch({type: 'SET_PRODUCTOS', payload: data});
          
    
        } catch(error) {
          console.log(error)
        }
      }
    
      useEffect(() => {
        apiCall()
      }, []);

    return (
        <AppContext.Provider value={[state, dispatch]}>
            {children}
        </AppContext.Provider>
    );
}

function App() {
    return (
        <AppProvider>
            <Home />
        </AppProvider>
    );
}

export default App;


