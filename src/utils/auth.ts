// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { auth } from '../firebase';
import { onAuthStateChanged, User, Auth } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const handleSignUp = async (email: string, password: string) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        await signInWithEmailAndPassword(auth, email, password); // Sign in the user after sign-up
        return true;
    } catch (error) {
        console.error("Sign up error:", error);
    }
};

const handleSignIn = async (email: string, password: string) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        return true;
    } catch (error) {
        console.error("Sign in error:", error);
    }
};

const handleSignOut = async () => {
    await signOut(auth);
    return true;
};

function subscribeToAuthChanges(auth: Auth, setUser: (user: User | null) => void) {
    return onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
            setUser(null);
        }
    });
}

export { handleSignUp, handleSignIn, handleSignOut, subscribeToAuthChanges };