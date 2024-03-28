'use client';
import React, { useState } from "react";

export default function registerPage() {
    const [arrayList, setArrayList] = useState([]);
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const createUser = (username, password, email, firstName, lastName, age) => {
        return {
            username: username,
            password: password,
            email: email,
            firstName: firstName,
            lastName: lastName,
            age: age
        };
    };

    const handleLogin = (event) => {
        event.preventDefault();
        const newUser = createUser(username, password, "bobby@gmail.com", "bob", "jim", 5);
        setArrayList([...arrayList, newUser]);
    };

    return (
        <main>
            <h2>Register</h2>
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
            
            {/* Display arrayList at the bottom */}
            <div>
                <h3>User List:</h3>
                {arrayList.map((user, index) => (
                    <div key={index}>
                        <h4>{user.username}</h4>
                        <p>Password: {user.password}</p>
                        <p>Email: {user.email}</p>
                        <p>Full Name: {user.firstName} {user.lastName}</p>
                        <p>Age: {user.age}</p>
                    </div>
                ))}
            </div>
        </main> 
    );
}
