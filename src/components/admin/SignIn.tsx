import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleSignIn } from "../../utils/auth.ts";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { getDFD_CODE } from '../../firebase';
import '../../css/admin/SignUp.css'; // Import the same CSS file used by SignUp

function SignIn() {
    const navigate = useNavigate();
    const [dfdCode, setDfdCode] = useState<string>('');
    const [enteredCode, setEnteredCode] = useState<string>('');
    const [error, setError] = useState<string>('');

    useEffect(() => {
        async function fetchDFDCode() {
            try {
                const code = await getDFD_CODE();
                setDfdCode(String(code));
            } catch (error) {
                console.error("Error fetching DFD code:", error);
            }
        }
        fetchDFDCode();
    }, []);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();
        const form = event.currentTarget;
        const email = form.email.value;
        const password = form.password.value;
        const code = form.code.value.trim();

        if (code !== dfdCode) {
            setError("Invalid code. Please try again.");
            return;
        }

        try {
            const success = await handleSignIn(email, password);
            if (success) {
                navigate("/admin");
            } else {
                setError("Failed to sign in. Please check your credentials.");
            }
        } catch (error) {
            console.error(error);
            setError("Failed to sign in. Please check your credentials.");
        }
    }

    return (
        <div className="container">
            <h1 className="title">Sign In</h1>
            <form onSubmit={handleSubmit} className="form">
                <label className="label">Email:</label>
                <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="input"
                />
                <br />
                <label className="label">Password:</label>
                <input
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    className="input"
                />
                <br />
                {error && <p className="error">{error}</p>}
                <label className="label">Six-Digit DFD Code:</label>
                <input
                    name="code"
                    type="text"
                    placeholder="Enter six-digit code"
                    value={enteredCode}
                    onChange={(e) => setEnteredCode(e.target.value)}
                    className="input"
                />
                <br />
                <button type="submit" className="button">Sign In</button>
            </form>
        </div>
    );
}

export default SignIn;