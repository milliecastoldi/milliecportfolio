import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import './style/style.css'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVc_bzr80yWBnsLIeYGbgRCTl5xsAM5wY",
  authDomain: "milliecportfolio.firebaseapp.com",
  databaseURL: "https://milliecportfolio-default-rtdb.firebaseio.com",
  projectId: "milliecportfolio",
  storageBucket: "milliecportfolio.firebasestorage.app",
  messagingSenderId: "563371488156",
  appId: "1:563371488156:web:66cdaf17b06e89de6b0e59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Database URL:", app.options.databaseURL);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </StrictMode>
)
