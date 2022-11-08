import database from '../client'
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'

const petCollectionRef = collection(database, 'pets')

class PetService {
    addPets = (newPets) => {
        return addDoc(petCollectionRef, newPets)
    }

    updatePets = (id, updateDoc) => {
        const petDoc = doc(database, 'pets', id)
        return updateDoc(petDoc, updateDoc)
    }

    deletePets = (id) => {
        const petDoc = doc(database, 'pets', id)
        return deleteDoc(petDoc)
    }

    getAllPets = () => {
        return getDocs(petCollectionRef)
    }

    getPet = (id) => {
        const petDoc = doc(database, 'pets', id)
        return getDoc(petDoc)
    }
}

export default new PetService()