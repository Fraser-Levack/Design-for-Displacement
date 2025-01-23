import { Link } from 'react-router-dom';
import '../../css/Admin.css';
import InputBlock from "./InputBlock.tsx";
import UploadWidget from "./UploadWidget.tsx";

function AdminMicro () {
    return (
        <>
            <div className={"admin-header"}>
                <section className={"top-header"}>
                    <h1>Admin Micro</h1>
                    <Link to="/admin" className={"custom-link"}>
                        <h2>Go back to Admin</h2>
                    </Link>
                    <Link to="/" className={"custom-link"}>
                        <h2>Go back to Main DfD</h2>
                    </Link>
                </section>
            </div>
            <UploadWidget cloudName="dtlj6wzki"
                          uploadPreset="gggggug"
                          folder="Micro" />
            <InputBlock blockPath={"blocks/micro/"}/>
        </>
    );
}

export default AdminMicro;