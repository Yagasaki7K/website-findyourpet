import React from 'react'
import './App.css'

import App from './App'

import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './utils/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

    <React.StrictMode>
        <BrowserRouter>
            <AuthContext>
                <App />
            </AuthContext>
        </BrowserRouter>
    </React.StrictMode>
)
