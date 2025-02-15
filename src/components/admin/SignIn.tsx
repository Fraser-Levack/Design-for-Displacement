import React from "react";
import { useNavigate } from "react-router-dom";
import {handleSignIn} from "../../utils/auth.ts";

function SignIn () {
    const navigate = useNavigate();

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();
        const { email, password } = event.currentTarget.elements as typeof event.currentTarget.elements & {
            email: { value: string };
            password: { value: string };
        };
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
                <input name="password" type="password" placeholder="Password" />
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}

export default SignIn;