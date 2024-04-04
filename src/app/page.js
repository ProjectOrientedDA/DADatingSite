import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <a
        href="/about"
        className={styles.topRightLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        About Us
      </a>

      <main>
        <h1 id="bonheurlogo" className={styles.bonheurlogo}>~ bonheur</h1>
        
        <div className={styles.imageContainer}>
          <img src="/romanticbeach.jpg" id="romanticbeach" className={styles.beachImage} />
          <div className={styles.whiteBox}></div> {/* Insert the white box here */}
        </div>

        <div>
          <div>
            <a
              href="/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Register
              </h2>
              <p>Register Here.</p>
            </a>

            <a
              href="/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Log In
              </h2>
              <p>Log in here.</p>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
