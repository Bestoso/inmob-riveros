import React from 'react'
import './style.css';

export const Buscador = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
    }

    return (
        <div className='buscador'>
            <form className='form' onSubmit={ handleSubmit }>
                <select className='select'>
                    <option className='option'> Venta </option>
                    <option className='option'> Alquiler </option>
                </select>
                <select className='select'>
                    <option className='option'> Departamento </option>
                    <option className='option'> Casa </option>
                    <option className='option'> Local </option>
                </select>
                <select className='select'>
                    <option className='option'> Monoambiente </option>
                    <option className='option'> 2 Ambientes </option>
                    <option className='option'> Otro </option>
                </select>
                <input type='submit' className='submit' value='Buscar' />
            </form>
        </div>
    )
}
