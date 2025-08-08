import React from 'react'; 
import { Link } from "react-router-dom";
import Nav from './nav'

import '../style/style.css';

export default function HomePage() {
    return (
    <>
       <Nav />
    <main>
        <div>
            <img src="./public/IMG_0901.JPG" alt="Professional outdoor headshot of Millie Castoldi wearing a University of Washington t-shirt"/>

            <div>
                <h1>Hi, my name is Millie Castoldi</h1> 
                <h2>Third-year Informatics Major / Business Minor at the University of Washington</h2>
            </div>

        </div>

        <div>
            <h3> Quick links </h3>
            <div className="link-card-container">
            </div>
        </div>

        <div>
            <h3> Skills </h3>   

            <div className="card-grid-container">
                <div className="card glass-element">
                    <p>Java</p>
                </div>

                <div className="card glass-element">
                    <p>JavaScript</p>
                </div>

                <div className="card glass-element">
                    <p>React</p>
                </div>

                <div className="card glass-element">
                    <p>Firebase</p>
                </div>

                  <div className="card glass-element">
                    <p>R</p>
                </div>

                
            </div>

        </div>

    </main>
    </>
    );
}