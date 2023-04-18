/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react'
import PetButtonDetails from './AddPetButtonDetails'
import { ThemeProvider } from 'styled-components';

function RedirectToSignUp() {
    window.location.href = '/cadastro'
}

function RedirectToMaps() {
    window.location.href = '/maps'
}

const AddPetButton = () => {
    const [theme, setTheme] = useState({ mode: 'light' });

    const SwitchMode = () => {
        setTheme({ mode: theme.mode === 'light' ? 'dark' : 'light' });
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <PetButtonDetails>
                    <button onClick={RedirectToSignUp} className="firstButton"><i className="uil uil-plus"></i></button>
                    <button onClick={RedirectToMaps} className="secondButton"><i className="uil uil-map-marker"></i></button>
                    <button onClick={SwitchMode} theme={theme} className="thirdButton"><i className="uil uil-lightbulb-alt"></i></button>
                </PetButtonDetails>
            </ThemeProvider>
        </>
    )
}

export default AddPetButton
