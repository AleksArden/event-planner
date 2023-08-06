import { initializeApp, getApps } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAqr3CAhKv4E2QtyHX4RZsdIc0AZH4fo1k',
  authDomain: 'event-planner-d0cf6.firebaseapp.com',
  projectId: 'event-planner-d0cf6',
  storageBucket: 'event-planner-d0cf6.appspot.com',
  messagingSenderId: '458682976596',
  appId: '1:458682976596:web:9bfd49a1046abdaad460c1',
  measurementId: 'G-P3V0Z70MEE',
};

let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
