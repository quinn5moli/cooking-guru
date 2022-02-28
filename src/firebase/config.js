import firebase from 'firebase/app'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBE6-VR_ImYF1X96HQ0YZw1XoAVjLrRdhI",
    authDomain: "cooking-site-88e53.firebaseapp.com",
    projectId: "cooking-site-88e53",
    storageBucket: "cooking-site-88e53.appspot.com",
    messagingSenderId: "951992057178",
    appId: "1:951992057178:web:12ee1f754c0c314a42c763",
    measurementId: "G-K2YM2MS9B4"
  }

  // init firebase
  firebase.initializeApp(firebaseConfig)

  // init services
  const projectFirestore = firebase.firestore()

  export { projectFirestore }