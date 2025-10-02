import React, { useState } from 'react'
import { getDatabase, ref, push } from "firebase/database"; 


import '../style/style.css'

export default function ContactForm() {

    const db = getDatabase(); 

    const [firstName, setFirstName] = useState(''); 
    const [surname, setSurname] = useState('');
    const [subject, setSubject] = useState(''); 
    const [message, setMessage] = useState(''); 
    const [email, setEmail]= useState('');
    const [status, setStatus] = useState(null);
    

    const handleSubmit = async (e) => {

        e.preventDefault(); 

        if (!firstName || !surname || !email || !subject || !message) {
            setStatus("Please fill in all fields.");
            return;
        }

          try {
            await push(ref(db, "messages"), {
                firstName,
                surname,
                email,
                subject,
                message,
                timestamp: Date.now()
            });

            setStatus("Message sent!");
            setFirstName('');
            setSurname('');
            setEmail('');
            setSubject('');
            setMessage('');
        } catch (error) {
            console.error(error);
            setStatus("Error sending message.");
        }
    };


    return (
        <form onSubmit={handleSubmit}>

            <div className="names">
                 <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

            <label htmlFor="surname">Last Name</label>
            <input type="text" id="surname" name="surname" value={surname} onChange={(e) => setSurname(e.target.value)} /> <br />

            </div>
            
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />

            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} /> <br />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} /> <br />

            <input type="submit" value="Submit Message" />

        </form>
    )

}
