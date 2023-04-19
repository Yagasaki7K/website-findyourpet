import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();

const AuthContext = (props) => {

    const [theme, setTheme] = useState(false);

    function toggleTheme() {
        theme ? setTheme(false) : setTheme(true);
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
