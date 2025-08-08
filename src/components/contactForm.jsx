import React, { useState } from 'react'
import Nav from './nav'

import '../style/style.css'

export default function ContactForm() {
    const [firstName, setFirstName] = useState(''); 
    const [surname, setSurname] = useState('');
    const [subject, setSubject] = useState(''); 
    const [message, setMessage] = useState(''); 
    const [email, setEmail]= useState('');
    const [status, setStatus] = useState(null);
    

    const handleSubmit = async (e) => {

        e.preventDefault(); 




    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

            <label htmlFor="surname">Last Name</label>
            <input type="text" id="surname" name="surname" value={surname} onChange={(e) => setSurname(e.target.value)} /> <br />

            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />

            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} /> <br />

            <label htmlFor="message">Message</label>
            <textArea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} /> <br />

            <input type="submit" value="Submit Message" />
        </form>
    )




}