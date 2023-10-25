import { useEffect, useState } from 'react';
import Home from './Pages/home'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from "./Context/Provider";

function App() {



  return (
    <AppProvider>
      <Home/>
    </AppProvider>
  )
}

export default App
