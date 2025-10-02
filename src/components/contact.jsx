import React from 'react'
import Nav from './nav'
import ContactForm from './contactForm'


import '../style/style.css'

export default function ContactPage () {
    return (
        <> 
        <Nav />
        <div className="container-fluid">
        <div className="row justify-content-center mx-auto">

        <div className="col-2">
        </div>
    
        <div className="col-12 col-md-8">
            <ContactForm />
        </div>

        <div className="col-12 col-md-2 justify-content-center">
        </div>

        </div> 
        </div>

    </>

    
)
}

