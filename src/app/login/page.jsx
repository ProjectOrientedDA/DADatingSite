'use client';
import React, { useState } from "react";

export default function LoginPage() {
    const [password, setPassword] = useState("");

    const [username, setUsernamex] = useState("");
    const handleLogin = () => {
        // Implement login logic here
        console.log("Username:", username);
        console.log("Password:", password);
    };

    return (
        <main>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </main> 
    );
}
