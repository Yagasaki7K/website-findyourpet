import React, {useEffect} from 'react'
import PetButtonDetails from './AddPetButtonDetails'

function RedirectToSignUp() {
    window.location.href = '/signup'
}

const AddPetButton = () => {
    return (
        <>
            <PetButtonDetails>
                <button onClick={RedirectToSignUp}><i className="uil uil-plus"></i></button>
            </PetButtonDetails>
        </>
    )
}

export default AddPetButton