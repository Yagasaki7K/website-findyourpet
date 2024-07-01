import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { storage } from "../../client"

class ImgServices {

    uploadImgPost = async (folder, file, filetype) => {
        const reference = ref(storage, `${folder}/${file.name}`)
        const uploadTask = uploadBytesResumable(reference, file, { contentType: filetype })

        uploadTask.on("state_changed", (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log("Progresso de downlaod: ", progress)
        })

        uploadTask.catch((error) => {
            console.log("Aconteceu um erro ao carregar o arquivo: ", error)
        })

        await uploadTask
        const url = await getDownloadURL(uploadTask.snapshot.ref)
        return url
    }

    deleteImage = async (nameFile) => {
        const filesImagesRef = ref(storage, `files/${nameFile}`);
        return await deleteObject(filesImagesRef);
    };
}

export default new ImgServices();