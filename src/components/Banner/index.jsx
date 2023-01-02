import React from 'react'
import { Buscador } from '../Bucador';
import './style.css';
import banner from '../../assets/static/banner.jpg';
import { useNavigate } from 'react-router-dom';

export const Banner = () => {

    const n = useNavigate();

    return (
        <section className='banner' style={{
            background: `linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0.3)), url(${banner} ) no-repeat center center/cover`,
        }}>
            <div className='text__container'>
                <h1 className='title'> Riveros Propiedades </h1>
                <h2 className='subtext'> Tu inmobiliaria de confianza</h2>
                <button className='button' onClick={() => {
                    n('/contacto')
                }}> Contactanos </button>
            </div>
            <Buscador />
        </section>
    )
}
