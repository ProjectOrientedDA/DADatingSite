'use client';
import React, { useState } from "react";

export default function LoginPage() {

    const [password, setPassword] = useState("");

    const [username, setUsername] = useState("");
    const handleLogin = () => {
        // Implement login logic here
        console.log("Username:", username);
        console.log("Password:", password);

        event.preventDefault();

        redirectToPage("/services");

    };



    // Function to turn paragraph into a redirect link
    function redirectToPage(url) {
        // Get the paragraph element
        var paragraph = document.getElementById("redirect");

        // Create a new anchor element
        var link = document.createElement("a");
        
        // Set the href attribute of the anchor element to the specified URL
        link.href = url;
        
        // Set the text content of the anchor element to the text content of the paragraph
        link.textContent = paragraph.textContent;

        // Replace the paragraph element with the anchor element
        paragraph.parentNode.replaceChild(link, paragraph);
    }

    // Call the redirectToPage function with the desired URL



    return (
        <main>
            <h2>Login</h2>

            <p id = "redirect">hello</p>


            


            

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

    // return (
    //     // <main className={styles.main}>
    
    //     <div> 
    //       <div >
    //         <div >
    //           <a
    //             href="/services"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <h2>
    //               Docs <span>-&gt;</span>
    //             </h2>
    //             <p>Find in-depth information about Next.js features and API.</p>
    //           </a>
              
    //           </div>
    //         </div>
    //       </div>
    //     );
}