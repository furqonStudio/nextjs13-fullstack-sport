// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBxYonPWb0JOBqmQKpJDcvCLQlnVcXs6HU',
  authDomain: 'nextjs13-fullstack-sport.firebaseapp.com',
  projectId: 'nextjs13-fullstack-sport',
  storageBucket: 'nextjs13-fullstack-sport.appspot.com',
  messagingSenderId: '683362820045',
  appId: '1:683362820045:web:ec3e4971f0bc3eb7b46e84',
  measurementId: 'G-JV5756FWD2',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export default app
