import { ref, deleteObject } from "firebase/storage";
import { storage } from "../client";

class ImgServices {
    deleteImage = async (nameFile) => {
        const filesImagesRef = ref(storage, `files/${nameFile}`);
        return await deleteObject(filesImagesRef);
    };
}
export default new ImgServices();