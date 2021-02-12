import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCbcKXxP59KGpozfliTfSKciszR5H_hgww",
    authDomain: "catch-of-the-day-zero.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-zero-default-rtdb.firebaseio.com",
    appId: "1:406088910824:web:0e8f6eae4c1a1906df865d",
    measurementId: "G-44L5RKTTWP"
})

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;