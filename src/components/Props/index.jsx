import React from 'react'
import { propiedades } from '../../data/props'
import './style.css';

export const Props = () => {
    return (
        <section className='propiedades'>
            <div className='props__container'>
            {
                propiedades.map((prop, index) => {
                    return (
                        <div className='prop__card' key={ index }>
                            <div className='image__container'>
                                <img src={ prop.img } alt={ prop.titulo } />
                            </div>
                            <div className='info__container'>
                                <p className='price'>
                                    ${ prop.precio }
                                </p>

                                <p className='title'>
                                    { prop.titulo }
                                </p>

                                <p className='description'>
                                    { prop.description }
                                </p>
                                <div className='container'>

                                <p className='location'>
                                    { prop.direccion }
                                </p>
                                <a href={ prop.argenprop } target='_blank' className='button'>
                                    Ver mas
                                </a>
                                </div>


                            </div>
                        </div>
                    )
                })
            }
            </div>
        </section>
    )
}
