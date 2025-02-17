import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleSignIn } from "../../utils/auth.ts";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { getDFD_CODE } from '../../firebase';

function SignIn() {
    const navigate = useNavigate();
    const [dfdCode, setDfdCode] = useState<string>('');
    const [enteredCode, setEnteredCode] = useState<string>('');

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
        const { email, password, code } = event.currentTarget.elements as typeof event.currentTarget.elements & {
            email: { value: string };
            password: { value: string };
            code: { value: string };
        };

        if (code.value.trim() !== dfdCode) {
            alert("Invalid code. Please try again.");
            return;
        }

        try {
            const success = await handleSignIn(email.value, password.value);
            if (success) {
                navigate("/admin"); // Redirect to the main admin page
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <input name="email" type="email" placeholder="Email" />
                <br />
                <input name="password" type="password" placeholder="Password" />
                <br />
                <input name="code" type="text" placeholder="Enter six-digit code" value={enteredCode} onChange={(e) => setEnteredCode(e.target.value)} />
                <br />
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}

export default SignIn;