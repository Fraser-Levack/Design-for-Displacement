import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleSignUp } from "../../utils/auth.ts";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { getDFD_CODE } from '../../firebase';
import '../../css/admin/SignUp.css'; // Import the external CSS file

function SignUp() {
    const navigate = useNavigate();
    const [dfdCode, setDfdCode] = useState<string>('');
    const [enteredCode, setEnteredCode] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
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
        const confirmPassword = form.confirmPassword.value;
        const code = form.code.value.trim(); // Trim any leading/trailing whitespace

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (code !== dfdCode) {
            setError("Invalid code. Please try again.");
            return;
        }

        try {
            const success = await handleSignUp(email, password);
            if (success) {
                navigate("/admin"); // Redirect to the main admin page
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="container">
            <h1 className="title">Sign Up</h1>
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input"
                />
                <br />
                <label className="label">Confirm Password:</label>
                <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                <button type="submit" className="button">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;