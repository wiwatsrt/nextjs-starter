import firebase from 'firebase/app'
import 'firebase/auth'

import { FirebaseConfig } from '../types/firebase'

if (typeof window !== 'undefined' && !firebase.apps.length) {
  const clientCredentials = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  } as FirebaseConfig

  firebase.initializeApp(clientCredentials)
  //   firebase.auth().setPersistence(firebase.auth.Auth?.Persistence?.SESSION);
  //   (window as any).firebase = firebase;
}

export default firebase
