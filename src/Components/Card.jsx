import React from 'react'

function Card({cuadros}) {
  return (
    <>
        <div className='cards-container'>
            <div className='box-card'>
                <h1 className='title-card'>{cuadros.title}</h1>
                <img src={cuadros.images} alt="a" className='img-card'/>
                <p className='description-card'>{cuadros.description}</p>
                <button className='btn-add'>Add</button>
            </div>
        </div>
    </>
  )
}

export default Card
