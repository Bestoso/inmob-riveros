import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { propiedades } from '../../data/props';
import { SearchButton } from '../PropsPage';

export const Operation = () => {
    const { operation } = useParams();
    const n = useNavigate();

    const [inmo, setInmo] = useState([]);

    const getInmoByOperation = () => {
        const inmoByOperation = propiedades.filter((inmo) => inmo.operacion === operation);
        setInmo(inmoByOperation);
    }

    useEffect(() => {
        getInmoByOperation();
    }, [])

    return (
        <div className='props__page'>
        <div className='button__container'>
            <button className='button' onClick={() => {
                n('/propiedades')
            }}>
                Go Back
            </button>
        </div>
        <div className='propiedades'>
        <div className='props__container'>
        {
            inmo.map((prop, index) => {
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
                            <a href='#' className='button'>
                                Ver mas
                            </a>
                            </div>


                        </div>
                    </div>
                )
            })
        }
        </div>
    </div>
    </div>
    )
}
