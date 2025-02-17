import { Link } from 'react-router-dom';
import '../../css/Admin.css';
import InputBlock from "./InputBlock.tsx";
import UploadWidget from "./UploadWidget.tsx";

import { useEffect, useState } from "react";
import { User} from "firebase/auth";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { auth } from "../../firebase";
import { subscribeToAuthChanges } from "../../utils/auth.ts";


function AdminMacro () {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = subscribeToAuthChanges(auth, setUser);

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);


    return (
        <>
            <div className={"admin-header"}>
                <section className={"top-header"}>
                    <h1>Admin Macro</h1>
                    <Link to="/admin" className={"custom-link"}>
                    <h2>Go back to Admin</h2>
                    </Link>
                    <Link to="/" className={"custom-link"}>
                        <h2>Go back to Main DfD</h2>
                    </Link>
                </section>
            </div>
            { user ? <>
            <UploadWidget cloudName="dtlj6wzki"
                          uploadPreset="gggggug"
                          folder="Macro" />
            <InputBlock blockPath={"blocks/macro/"}/> </>
            : <p> Please sign in to access this page. </p> }
        </>
    );
}

export default AdminMacro;