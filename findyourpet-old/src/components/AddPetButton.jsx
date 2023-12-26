// import React, { useEffect } from 'react'
import React, { useContext } from 'react'
import PetButtonDetails from './AddPetButtonDetails'
import { Context } from '../utils/ThemeContext'

function RedirectToSignUp() {
    window.location.href = '/cadastro'
}

// function RedirectToMaps() {
//     window.location.href = '/maps'
// }

const AddPetButton = () => {

    const { toggleTheme, theme } = useContext(Context);


    return (
        <>
            <PetButtonDetails>
                <button onClick={RedirectToSignUp} className="firstButton"><i className="uil uil-plus"></i></button>
                <button onClick={toggleTheme} className="secondButton">
                    {theme === 'lightTheme' ? <i className="uil uil-moon"></i> : <i className="uil uil-sun"></i>}
                </button>
                {/* <button onClick={RedirectToMaps} className="thirdButton"><i className="uil uil-map-marker"></i></button>  */}
            </PetButtonDetails>
        </>
    )
}


export default AddPetButton;
