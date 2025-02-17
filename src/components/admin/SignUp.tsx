import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleSignUp } from "../../utils/auth.ts";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { getDFD_CODE } from '../../firebase';

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
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <input name="email" type="email" placeholder="Email" />
                <br />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <br />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <input
                    name="code"
                    type="text"
                    placeholder="Enter six-digit code"
                    value={enteredCode}
                    onChange={(e) => setEnteredCode(e.target.value)}
                />
                <br />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;