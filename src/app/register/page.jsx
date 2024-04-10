"use client";

import { useState } from "react";
import NavBar from "../../../components/NavBar";
import axios from "axios";

export default function registerPage() {

    const [ registerUsername, setRegisterUsername ] = useState('');
    const [ registerPassword, setRegisterPassword ] = useState('');

    const register = () => {
        axios({
            method:"post",
            data: {
                username: registerUsername,
                password: registerPassword
            },
            withCredentials: true,
            url: "http://localhost:3006/register"
        }).then((res) => console.log(res)).catch(( err) => console.log(err));
    }

    return (
        <main>
            {console.log(registerUsername)}
            <NavBar></NavBar>
            <h2>register</h2>
            <input type="text" name="username" placeholder="username" onChange={e => setRegisterUsername(e.target.value)}></input>
            <input type="password" name="password" placeholder="password" onChange={e => setRegisterPassword(e.target.value)}></input>
            <button onClick={register}>register</button>
        </main> 
    )
}