import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FloatingButton } from "../components/FloatingButton";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <code className={styles.code}>task-pdf-writer</code>
        </h1>

        <div className={styles.grid}>
          <a
            href="https://github.com/plumsirawit/task-pdf-writer"
            className={styles.card}
          >
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about task-pdf-writer features.</p>
          </a>

          <a href="/register" className={styles.card}>
            <h2>Register &rarr;</h2>
            <p>
              Register to discover, create, and share simple task statements.
            </p>
          </a>

          <a href="/login" className={styles.card}>
            <h2>Login &rarr;</h2>
            <p>Already have an account? Let's start!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>

      <a
        href="https://github.com/plumsirawit/task-pdf-writer"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.ghlogo}
      >
        <Image
          src="/GitHub-Mark-Light-64px.png"
          alt="GitHub Logo"
          width={64}
          height={64}
        />
      </a>
    </div>
  );
}
