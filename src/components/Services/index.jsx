import React from 'react'
import serv1 from '../../assets/static/serv1.jpg';
import serv2 from '../../assets/static/serv2.jpg';
import serv3 from '../../assets/static/serv3.jpg';
import serv4 from '../../assets/static/serv4.jpg';
import './style.css';

export const Services = () => {

    const servicios = [
        {
            nombre: 'Asesoramiento e información de mercado.',
            descripcion:'Vender una propiedad es un proceso complejo sino se utilizan las herramientas necesarias para lograr una operación exitosa.',
            imagen: serv1
        },
        {
            nombre: 'Valoración de la propiedad',
            descripcion:'Con nuestros servicios de tasación, garantizamos el precio de mercado de tuinmueble, en base a un estudio de zona y entorno, a través de ventas ejecutadas y así podremos darte información verificada.',
            imagen: serv2
        },
        {
            nombre: 'Muestra de propiedades',
            descripcion:' Un agente se encargará exclusivamente de la venta de tu vivienda, asesorandote y brindando toda la información sobre el proceso de la operación.',
            imagen: serv3
        },
        {
            nombre: 'Venta sujeto a compra',
            descripcion:'Realizamos la búsqueda de una nueva propiedad, acorde a las necesidades de los clientes,hasta la conformidad absoluta, para llevar a cabo el cambio acompañando en la transición.',
            imagen: serv4
        }
    ];


    return (
        <>
            <section className='servicios'>
            {
                servicios.map(( servicio, index ) => {
                    return (
                        <div className='servicio' key={ index }>
                            <div className='img-container'>
                                <img src={ servicio.imagen } alt='servicio' className='servicio-img'/>
                            </div>
                            <h3 className='servicio__titulo'>{ servicio.nombre }</h3>
                            <small className='small'>{servicio.descripcion}</small>
                        </div>
                    )
                })
            }
            </section>
        </>
    )
}
