import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  // Define your items here. This could be fetched from an API or defined inline as shown.
  const links = [
    {
      href: "/home",
      title: "Hello World!",
      description: "Find in-depth information about Next.js features and API.",
      key: "docs" // Unique key for React's list rendering
    },
    // Add more items here if necessary. For the sake of this example, we'll just replicate the 'Docs' item multiple times.
  ];

  // If every item is the same, you can simply replicate the entry in the array.
  // Here we replicate the same item 5 times for demonstration.
  const repeatedLinks = Array(100).fill(links[0]);

  return (
    <main className={styles.main}>
      <div className={styles.sidebar}>
        <div className={styles.main_content}>
          {repeatedLinks.map((link, index) => (
            <a
              key={link.key + index} // Ensure the key is unique for each item
              href={link.href}
              className={styles.main_content}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                {link.title} <span>-&gt;</span>
              </h2>
              <p>{link.description}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
