import React, { useEffect } from 'react'
import PetButtonDetails from './AddPetButtonDetails'

function RedirectToSignUp() {
    window.location.href = '/cadastro'
}

function RedirectToMaps() {
    window.location.href = '/maps'
}

const AddPetButton = () => {
    return (
        <>
            <PetButtonDetails>
                <button onClick={RedirectToSignUp} className="firstButton"><i className="uil uil-plus"></i></button>
                <button onClick={RedirectToMaps} className="secondButton"><i className="uil uil-map-marker"></i></button>
            </PetButtonDetails>
        </>
    )
}

export default AddPetButton