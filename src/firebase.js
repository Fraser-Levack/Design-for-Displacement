import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/database';
import { getDatabase, ref, set, onValue } from 'firebase/database';



const firebaseConfig = {
    apiKey: "AIzaSyCSKpwZmAuBLmZCcJWP24YPeBGU-AMY7zQ",
    authDomain: "design-for-displacement.firebaseapp.com",
    projectId: "design-for-displacement",
    storageBucket: "design-for-displacement.firebasestorage.app",
    messagingSenderId: "1032628266185",
    appId: "1:1032628266185:web:fa2f85596eec097e069918",
    measurementId: "G-FYMP76TDB8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

// Function to write data
export const writeUserData = (userId, name, email) => {
    set(ref(db, 'users/' + userId), {
        username: name,
        email: email
    }).then( r => console.log('Data saved'));
};

// Function to read data
export const readUserData = (userId, callback) => {
    const userRef = ref(db, 'users/' + userId);
    onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        callback(data);
    });
};