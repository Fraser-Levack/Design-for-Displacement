// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { auth } from '../firebase';
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

export { handleSignUp, handleSignIn, handleSignOut };