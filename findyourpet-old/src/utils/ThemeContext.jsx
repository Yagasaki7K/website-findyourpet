import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();

const AuthContext = (props) => {

    const data = localStorage.getItem("Theme");
    const [theme, setTheme] = useState(data ? data : '');

    function toggleTheme() {
        if (theme === 'darkTheme') {
            setTheme('lightTheme')
            localStorage.setItem("Theme", 'lightTheme');
        } else {
            setTheme('darkTheme');
            localStorage.setItem("Theme", 'darkTheme');
        }
        
    }
    
    return (
        <Context.Provider value={{ theme, toggleTheme }}>
            {props.children}
        </Context.Provider>
    );
}

AuthContext.propTypes = {
    children: PropTypes.node.isRequired,
};

export { AuthContext, Context };
