// lib/firebaseUtils.js
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from './firebase'; // Make sure this path matches your `firebase.js` file

export const storeTestResult = async (userId, testDetails) => {
  try {
    await setDoc(doc(db, 'users', user.uid), {
      name,
      phoneNumber,
      email,
      testsTaken: []
    });
    console.log('User data added to Firestore');
  } catch (docError) {
    console.error('Error adding document:', docError);
  }
};
