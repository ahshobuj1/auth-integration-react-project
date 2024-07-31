// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAycvAnQIfNvoFZnmlLv5p_7_UiYl7uIb0',
    authDomain: 'auth-intregation-ab1a7.firebaseapp.com',
    projectId: 'auth-intregation-ab1a7',
    storageBucket: 'auth-intregation-ab1a7.appspot.com',
    messagingSenderId: '1003689143137',
    appId: '1:1003689143137:web:28f759bf1e606ff6fc7320',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
