import firebase_app from './config';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { nanoid } from 'nanoid';
const storage = getStorage(firebase_app);

export const uploadPhotoToStorage = async (file: File) => {
  const imageId = nanoid();
  try {
    const storageRef = ref(storage, `Images of events/${imageId}`);

    await uploadBytes(storageRef, file);
    const imageURL = await getDownloadURL(
      ref(storage, `Images of events/${imageId}`)
    );
    return imageURL;
  } catch (error) {
    console.log(error);
  }
};
