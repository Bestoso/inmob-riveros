import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Props } from '../Props'
import './style.css';


export const SearchButton = () => {
    const [buttonState, setButtonState] = useState('button');
    const n = useNavigate();

    const toggleButtonState = () => {
        if (buttonState === 'button') {	
            setButtonState('button active')
        } else {
            setButtonState('button')
        }
    }

    const navigateTo = (path) => {
        n(path);
        toggleButtonState();
    }

    return (
        <section className='props__page'>
        <div className='button__container'>
            <button className='button' onClick={() => {
                n('/propiedades/venta')
            }}> Venta </button>
            <button className='button' onClick={() => {
                n('/propiedades/alquiler')
            }}> Alquiler </button>
        </div>
        <Props />
    </section>
    )
}



export const PropsPage = () => {
    return (
        <section className='props__page'>
            <SearchButton />
            <Props />
        </section>
    )
}
