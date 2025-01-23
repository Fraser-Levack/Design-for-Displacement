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
export const writeBlockData = (blockId, contentInfo, blockPath) => {
    set(ref(db, blockPath + blockId), {
        content: contentInfo,
    }).then( () => {
        console.log('Data is saved');
    })
};

// Function to read all blocks
export const readAllBlocks = (callback, blockPath) => {
    const blocksRef = ref(db, blockPath);
    onValue(blocksRef, (snapshot) => {
        const data = snapshot.val();
        const blocksArray = Object.keys(data).map(key => ({
            id: parseInt(key, 10),
            ...data[key]
        }));
        callback(blocksArray);
    });
};

// Function to update/set a block base off of numerical id
export const updateBlockData = (blockId, contentInfo, blockPath) => {
    set(ref(db, blockPath + blockId), {
        content: contentInfo,
    }).then( () => {
        console.log('Data is updated');
    })
};

// Function to delete a block based off of numerical id
export const deleteBlockData = (blockId, blockPath) => {
    set(ref(db, blockPath + blockId), null).then( () => {
        console.log('Data is deleted');
    })
};