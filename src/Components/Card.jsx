import React from 'react'

function Card({cuadros}) {
  return (
    <>
      <div>
        <h1>{cuadros.title}</h1>
        <img src={cuadros.images} alt="a" />
        <p>{cuadros.description}</p>
        <button>Add</button>
      </div>
    </>
  )
}

export default Card
