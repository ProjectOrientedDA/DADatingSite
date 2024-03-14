// LoginPage.js
import React from 'react';

function LoginPage() {
  return (
    <div>
      {
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login Page</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0az;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background-color: #f4f4f4;
            }
            .container {
                width: 300px;
                padding: 20px;
                background-color: #fff;
                border-radius: 5px;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            }
            h2 {
                text-align: center;
            }
            .input-group {
                margin-bottom: 20px;
            }
            .input-group label {
                display: block;
                font-weight: bold;
                margin-bottom: 5px;
            }
            .input-group input {
                width: 100%;
                padding: 8px;
                border: 1px solid #ccc;
                border-radius: 3px;
            }
            .input-group input:focus {
                outline: none;
                border-color: #007bff;
            }
            .btn {
                width: 100%;
                padding: 10px;
                background-color: #007bff;
                border: none;
                border-radius: 3px;
                color: #fff;
                cursor: pointer;
                transition: background-color 0.3s;
            }
            .btn:hover {
                background-color: #0056b3;
            }
        </style>
        </head>
        <body>
        <div class="container">
            <h2>Login</h2>
            <form action="#">
                <div class="input-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" required>
                </div>
                <div class="input-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <button type="submit" class="btn">Login</button>
            </form>
        </div>
        </body>
        </html>
        
      }
      <h1>Login Page</h1>
      <p>This is your login page content.</p>
    </div>
  );
}

export default LoginPage;
