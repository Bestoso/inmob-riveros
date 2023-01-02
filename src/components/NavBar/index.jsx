import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css';

export const NavBar = () => {

    const [headerClass, setHeaderClass] = useState('header');
    const [menuClass, setMenuClass ] = useState('menu');
    const [togglerClass, setTogglerClass ] = useState('toggler__container');
    const n = useNavigate();

    const toggleMenuClass = () => {
        if (menuClass === 'menu') {
            setMenuClass('menu active')
            setTogglerClass('toggler__container active')
        } else {
            setMenuClass('menu')
            setTogglerClass('toggler__container');
        }
    }

    const toggleHeaderClass = () => {
        if (window.scrollY >= 100) {
            setHeaderClass('header active')
        } else {
            setHeaderClass('header')
        }
    }

    const navigateTo = (path = '/') => {
        n(path);
        toggleMenuClass();
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleHeaderClass);
    }, [])

    return (
        <>
        <header className={ headerClass }>
            <div className={ togglerClass }
                onClick={ toggleMenuClass }>
                <span className='toggler' />
                <span className='toggler' />
                <span className='toggler' />
            </div>
            <div className='logo__container'>
                <h1 className='logo'> mr </h1>
            </div>
            <nav className={ menuClass }>
                <div className='text__container'>
                    <h2 className='text'> Riveros Propiedades </h2>
                    <h3 className='subtext'>&copy; All rights reserved </h3>
                </div>
                <ul className='list'>
                    <li className='item' onClick={() => {
                        navigateTo();
                    }}>
                        <a className='anchor'> Inicio </a>
                    </li>
                    <li className='item' onClick={() => {
                        navigateTo('/propiedades')
                    }}>
                        <a className='anchor'> Propiedades </a>
                    </li>
                    <li className='item' onClick={() => {
                        navigateTo('/servicios')
                    }}>
                        <a className='anchor'> Servicios </a>
                    </li>
                    <li className='item' onClick={() => {
                        navigateTo('/contacto')
                    }}>
                        <a className='anchor'> Contacto </a>
                    </li>
                </ul>
                <div className='info__container'>
                    <h2 className='title'> ¿Quienes somos? </h2>
                    <p className='text'>Somos una compañía Inmobiliaria experta en la gestión de activos y créditos inmobiliarios, con presencia a nivel nacional. Contamos con miles de activos a la venta (primera y segunda residencia, oficinas, locales, naves, suelos, plazas de garaje, trasteros, etc.).</p>
                </div>
            </nav>
        </header>
        </>
    )
}
