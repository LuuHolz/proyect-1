import React from 'react'
import NavbarHome from '../Components/Navbar'
import Card from '../Components/Card'

function home({cuadros}) {


  return (
    <div>
        <NavbarHome/>

        {
          cuadros.length > 0 && cuadros.map((item) => {
              return <Card key={item.id} cuadros={item}/>
          })
        }
    </div>
  )
}

export default home
