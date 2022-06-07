import React from 'react'
import Carousel from 'react-grid-carousel'
import data from './data.json'
import '../styles/styles.css'

function Gallery() {
    return (
        <Carousel cols={2} rows={2} gap={1} loop containerClassName={Carousel} >
            {data.map(ciudades => {
                return(
                    <Carousel.Item key={ciudades.id} >
                        <img width="50%" height="15rem" src={ciudades.imagen} alt={ciudades.ciudad} className='imagenCiudades' />
                    </Carousel.Item>
                )
            })}
            
        </Carousel>
    )
}

export default Gallery
