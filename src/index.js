import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

// Import Your CSS
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Your Component / JSX
import App from './App';
import Header from './Components/header';
import Footer from './Components/footer';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
<Header />
    <App />
<Footer />
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
