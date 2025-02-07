import { Link } from 'react-router-dom';
import '../css/Admin.css';

function Admin ()   {
    return (
        <div>
            <h2 className={"admin-header"}>
                <section className={"top-header"}>
                    <h1>Design For Displacement Admin</h1>
                    <Link to="/" className={"custom-link"}>
                        <h2>Go back to Main DfD</h2>
                    </Link>
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