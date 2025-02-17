import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/database';
import { getDatabase, get, ref, set, onValue } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';



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
        reindexBlocks(blockPath);
    })
};

// function to get DFD_CODE for extra sign in security
export const getDFD_CODE = async () => {
    const dfdCodeRef = ref(db, 'DFD_CODE');
    return new Promise((resolve, reject) => {
        onValue(dfdCodeRef, (snapshot) => {
            const data = snapshot.val();
            resolve(data);
        }, reject);
    });
};

// Function to reindex blocks
export const reindexBlocks = (blockPath) => {
    const blocksRef = ref(db, blockPath);
    onValue(blocksRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            const blocksArray = Object.keys(data).map(key => ({
                id: parseInt(key, 10),
                ...data[key]
            }));

            // Sort blocks by their current id
            blocksArray.sort((a, b) => a.id - b.id);

            // Reindex blocks
            const indexedBlocks = blocksArray.reduce((acc, block, index) => {
                acc[index] = { content: block.content };
                return acc;
            }, {});

            // Save indexed blocks back to the database
            set(blocksRef, indexedBlocks).then(() => {
                console.log('Blocks indexed correctly');
            });
        }
    });
};

// Function to insert a new block at a specific position and shift higher blocks
export const insertBlockData = async (targetId, contentInfo, blockPath) => {
    const blocksRef = ref(db, blockPath);

    // Read all blocks
    const snapshot = await get(blocksRef); // Use get to read data once
    const data = snapshot.val();

    if (data) {
        // Convert blocks to an array and sort by ID
        const blocksArray = Object.keys(data).map(key => ({
            id: parseInt(key, 10),
            ...data[key]
        }));
        blocksArray.sort((a, b) => a.id - b.id);

        // Find blocks with IDs >= targetId and increment their IDs by 1
        const updatedBlocks = blocksArray.reduce((acc, block) => {
            if (block.id >= targetId) {
                acc[block.id + 1] = { content: block.content }; // Shift block up
            } else {
                acc[block.id] = { content: block.content }; // Leave block unchanged
            }
            return acc;
        }, {});

        // Add the new block at the target position
        updatedBlocks[targetId] = { content: contentInfo };

        // Save the updated blocks back to the database
        await set(blocksRef, updatedBlocks);
        console.log('New block inserted and blocks reindexed');
    }
};

export const auth = getAuth(app);