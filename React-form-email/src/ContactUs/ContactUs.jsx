import React, { useRef } from 'react';
import './ContactUs.css';
import emailjs from '@emailjs/browser';


export const ContactUs = () => {

    const refForm = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const serviceId = "service_8rcli7q";
        const templateId = "template_btr29jd";
        const apikey = "uHxKHHPdSnpHyEs7g";

        emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
            .then(result => console.log(result.text))
            .catch(error => console.error(error))
    }


    return (
        <form ref={refForm} action="" onSubmit={handleSubmit}>
            <div className="header-contact">
                <h2>Contact Us</h2>
                <p>Please fill this form</p>
            </div>
            <fieldset className="field-name">
                <label htmlFor="">name</label>
                <input name='username' type="text" required />
            </fieldset>
            <fieldset className='field-email'>
                <label  name='email'>Email</label>
                <input  type='email' id='email' required />
            </fieldset>
            <fieldset className='field-message'>
                <label>Email</label>
                <textarea maxLength="500" placeholder='type yout message' name="message" id="" cols="30" rows="10">
                </textarea>
            </fieldset>

            <button className='btn-send'>Send</button>
        </form>
    )
}