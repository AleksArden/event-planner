import firebase_app from './config';
import { getFirestore, doc, deleteDoc } from 'firebase/firestore';

const db = getFirestore(firebase_app);

export const deleteEventFromFirestore = async (eventId: string) => {
  await deleteDoc(doc(db, 'event-planner', eventId));
};
