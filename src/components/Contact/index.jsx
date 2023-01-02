import React, { useRef } from 'react'
import Swal from 'sweetalert2';
import './style.css';

export const Contact = () => {

    const nameRef = useRef(null);
    const mailRef = useRef(null);
    const textAreaRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const nameValue = nameRef.current.value;
        const mailValue = mailRef.current.value;
        const textAreaValue = textAreaRef.current.value;

        const regExps = {
            name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
            mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            textArea: /^.{1,255}$/,
        }

        const validate = (regExp, value) => {
            return regExp.test(value);
        }

        const validateForm = (regExps) => {
            const name = validate(regExps.name, nameValue);
            const mail = validate(regExps.mail, mailValue);
            const textArea = validate(regExps.textArea, textAreaValue);

            // validate one by one
            if (!name) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'El nombre no es valido',
                })
            } else if (!mail) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'El mail no es valido',
                })
            } else if (!textArea) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'El mensaje no es valido',
                })
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Mensaje enviado',
                    text: 'Gracias por contactarnos',
                })
            }
        }
        
        validateForm(regExps);
    }

    return (
        <section className='contact'>
            <div className='contact__container'>
                <div className='info__container'>
                    <h1 className='title'> Contactanos </h1>
                    <p className='description'> Responderemos tu consulta a la brevedad</p>
                </div>
                <form className='form' onSubmit={(e) => {
                    handleSubmit(e);
                }}>
                    <input type='text' placeholder='Nombre' className='input' ref={ nameRef } />
                    <input type='email' placeholder='Email' className='input' ref={ mailRef }/>
                    <textarea placeholder='Mensaje' className='textarea' ref={ textAreaRef }/>
                    <button className='button'> Enviar </button>
                </form>
            </div>
            <div className="mapa">
                <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=soler%204488+(MARTINEZ%20RIVEROS)&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/car-satnav-gps/">Sat Navs</a></iframe>
        </div>
        </section>
    )
}
