import { useEffect, useState } from 'react';
import Home from './Pages/home'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [cuadros, setCuadros] = useState([]);

  const apiCall = async () =>{
    try{
      const respuesta = await fetch ('https://api.escuelajs.co/api/v1/products')
      const data = await respuesta.json();
      console.log("hola", data)
      setCuadros(data)
      

    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    apiCall()
  }, []);

  return (
    <>
      <Home cuadros={cuadros}/>
    </>
  )
}

export default App
