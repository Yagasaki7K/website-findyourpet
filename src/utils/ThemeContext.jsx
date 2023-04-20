import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();

const AuthContext = (props) => {

    const [theme, setTheme] = useState('darkTheme');

    function toggleTheme() {
        if (theme === 'darkTheme') {
            setTheme('lightTheme')
        } else {
            setTheme('darkTheme');
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
