"use client";

import { useState } from "react"
import NavBar from "../../../components/NavBar";

export default function loginPage() {

    const [ loginUsername, setLoginUsername ] = useState('');
    const [ loginPassword, setLoginPassword ] = useState('');

    return (
        <main>
            {console.log(loginUsername)}
            <NavBar></NavBar>

            <h2>login</h2>
            <input type="text" name="username" placeholder="username" onChange={e => setLoginUsername(e.target.value)}></input>
            <input type="password" name="password" placeholder="password" onChange={e => setLoginPassword(e.target.value)}></input>
            <button>login</button>
        </main> 
    )
}