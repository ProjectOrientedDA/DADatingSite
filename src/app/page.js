
import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {

  return (
    <main className={styles.main}>

    <div className={styles.sidebar}> 
        <div className={styles.main_content}>
          <a
            href="/register"
            className={styles.main_content}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Register <span>-&gt;</span>
            </h2>
            <p>Register Here.</p>
          </a>

          <a
            href="/login"
            className={styles.main_content}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Log In <span>-&gt;</span>
            </h2>
            <p>Log in here.</p>
          </a>

        </div>
      </div>
    </main>
  );
}