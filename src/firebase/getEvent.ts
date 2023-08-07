import firebase_app from './config';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { EventWithoutId } from 'types/event';

export const getEventFromFirestore = async (
  eventId: string
): Promise<EventWithoutId | undefined> => {
  const db = getFirestore(firebase_app);
  const docRef = doc(db, 'event-planner', eventId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as EventWithoutId;
  } else {
    console.log('No such document!');
  }
};
