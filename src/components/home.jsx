import React from 'react'; 

import '../style/style.css';

export default function HomePage() {
    return (
    <body>
    <header>
       <nav>
            <a href="./about.html" >About</a>
            <a href="./projects.html">Projects</a>
            <a href="./contact.html">Contact</a>
       </nav>
    </header>

    <main>
        <div>
            <img src="../img/IMG_0901.JPG" alt="Professional outdoor headshot of Millie Castoldi wearing a University of Washington t-shirt"/>

            <div>
                <h1>Hi, my name is Millie Castoldi</h1> 
                <h2>Third-year Informatics Major / Business Minor at the University of Washington</h2>
            </div>

        </div>

        <div>
            <h3> Quick links </h3>
            <div class="link-card-container">
            </div>
        </div>

        <div>
            <h3> Skills </h3>   

            <div class="card-grid-container">
                <div class="card glass-element">
                    <p>Java</p>
                </div>

                <div class="card glass-element">
                    <p>JavaScript</p>
                </div>

                <div class="card glass-element">
                    <p>React</p>
                </div>

                <div class="card glass-element">
                    <p>Firebase</p>
                </div>

                  <div class="card glass-element">
                    <p>R</p>
                </div>

                
            </div>

        </div>

    </main>
    </body>
    );
}