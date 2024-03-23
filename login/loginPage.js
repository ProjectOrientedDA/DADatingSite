import React, { useState } from 'react';
import styles from './login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can perform authentication logic
    if (username === 'admin' && password === 'password') {
      // Successful login
      console.log('Login successful');
      // Redirect or set state to indicate logged in
    } else {
      // Failed login
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleLogin}>
        <h2>Login</h2>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        <div className={styles.formGroup}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
