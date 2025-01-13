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
export const writeBlockData = (blockId, contentInfo) => {
    set(ref(db, 'blocks/' + blockId), {
        content: contentInfo,
    }).then( () => {
        console.log('Data is saved');
    })
};

// Function to read data
export const readBlockData = (blockId, callback) => {
    const userRef = ref(db, 'users/' + blockId);
    onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        callback(data);
    });
};

// Function to read all blocks
export const readAllBlocks = (callback) => {
    const blocksRef = ref(db, 'blocks');
    onValue(blocksRef, (snapshot) => {
        const data = snapshot.val();
        const blocksArray = Object.keys(data).map(key => ({
            id: parseInt(key, 10),
            ...data[key]
        }));
        callback(blocksArray);
    });
};