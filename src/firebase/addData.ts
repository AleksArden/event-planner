import firebase_app from './config';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { Event } from 'types/event';

const db = getFirestore(firebase_app);

export const addDataToFirestore = async (data: Event) => {
  console.log(data);
  try {
    await addDoc(collection(db, 'event-planner'), data);
  } catch (error) {
    console.log(error);
  }
};
