
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
              Register Here! <span>-&gt;</span>
            </h2>
            <p>REGISTER</p>
          </a>

        </div>

        <div className={styles.main_content}>
        <a
            className={styles.main_content}
            href="/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Login <span>-&gt;</span>
            </h2>
            <p>Log In Here</p>
          </a>

        </div>
      </div>
    </main>
  );
}