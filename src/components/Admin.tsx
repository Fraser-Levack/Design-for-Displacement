import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import '../css/Admin.css';
import { onAuthStateChanged, User} from "firebase/auth";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { auth } from "../firebase";
import { handleSignOut} from "../utils/auth.ts";

function Admin ()   {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    async function handleSignOutClick() {
        try {
            await handleSignOut();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h2 className={"admin-header"}>
                <section className={"top-header"}>
                    <h1>Design For Displacement Admin</h1>
                    <Link to="/" className={"custom-link"}>
                        <h2>Go back to Main DfD</h2>
                    </Link>
                    {user ?
                        <div>
                            <p> Welcome, {(user as User).email}</p>
                            <button onClick={handleSignOutClick}>Sign Out</button>
                        </div>
                        :
                        <div>
                            <Link to="/admin/sign-in" className={"custom-link"}>
                                <h2>Sign In</h2>
                            </Link>
                            <Link to="/admin/sign-up" className={"custom-link"}>
                                <h2>Sign up</h2>
                            </Link>
                        </div> }
                </section>
            </h2>
            <div className={"sections"}>
                <section className={"macro-section"}>
                    <Link to="/admin/macro" className={"custom-link"}>
                        <h2>Macro</h2>
                    </Link>
                </section>
                <section className={"meso-section"}>
                    <Link to="/admin/meso" className={"custom-link"}>
                    <h2>Meso</h2>
                    </Link>
                </section>
                <section className={"micro-section"}>
                    <Link to="/admin/micro" className={"custom-link"}>
                        <h2>Micro</h2>
                    </Link>
                </section>
            </div>
        </div>
)
}

export default Admin;