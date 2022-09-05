import database from '../client'
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'
import { getStorage, ref } from 'firebase/storage'

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

    getPhoto = () => {
        const storage = getStorage()
        const mountainsRef = ref(storage, 'gs://kalify-findyourpet.appspot.com');

        // While the file names are the same, the references point to different files
        mountainsRef.name === mountainImagesRef.name;
        mountainsRef.fullPath === mountainImagesRef.fullPath;  
    }

    getPet = (id) => {
        const petDoc = doc(database, 'pets', id)
        return getDoc(petDoc)
    }
}

export default new PetService()