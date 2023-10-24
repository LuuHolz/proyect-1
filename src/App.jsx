import { useEffect, useState } from 'react';
import Home from './Pages/home'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [cuadros, setCuadros] = useState([]);


  return (
    <>
      <Home cuadros={cuadros}/>
    </>
  )
}

export default App
