import React, { useEffect, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { writeUserData, readUserData } from '../firebase';

interface UserData {
    username: string;
    email: string;
}

interface AdminProps {
    userId: string;
}

const Admin: React.FC<AdminProps> = ({ userId }) => {
    const [userData, setUserData] = useState<UserData | null>(null);

    useEffect(() => {
        readUserData(userId, (data: UserData) => {
            setUserData(data);
        });
    }, [userId]);

    const handleSave = () => {
        writeUserData(userId, 'John Doe', 'john.doe@example.com');
    };

    return (
        <div>
            <h1>User Profile</h1>
            {userData ? (
                <div>
                    <p>Username: {userData.username}</p>
                    <p>Email: {userData.email}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <button onClick={handleSave}>Save User Data</button>
        </div>
    );
};

export default Admin;