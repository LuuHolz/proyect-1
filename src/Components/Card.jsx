import React from 'react'

function Card({cuadros}) {
  return (
    <>
        <div className='cards-container'>
                <h1 className='title-card'>{cuadros.title}</h1>
                <div className='box-img'>
                    <img src={cuadros.images} alt="Imagen" className='img-card'/>
                </div>
                <p className='description-card'>{cuadros.description}</p>
                <button className='btn-add'>View</button>
        </div>
    </>
  )
}

export default Card
