import React from "react";
import { useNavigate } from "react-router-dom";
import { handleSignUp } from "../../utils/auth.ts";

function SignUp() {
    const navigate = useNavigate();

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();
        const { email, password } = event.currentTarget.elements as typeof event.currentTarget.elements & {
            email: { value: string };
            password: { value: string };
        };
        try {
            const success = await handleSignUp(email.value, password.value);
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
                <input name="password" type="password" placeholder="Password" />
                <br />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;