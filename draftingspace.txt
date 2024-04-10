'use client';
import React, { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from 'next/navigation'


export default function LoginPage() {
    const router = useRouter()


    const [password, setPassword] = useState("");

    const [username, setUsername] = useState("");
    const handleLogin = () => {
        event.preventDefault(); 
        router.push('/services');

    };

    return (
        <main>
            <h2 className={styles.bonheurlogo}>~ bonheur</h2>

            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        
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