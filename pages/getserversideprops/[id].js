import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function CatchAll(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          The provided id slug is <strong>{props.id}</strong>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  if (params.id === "this-is-not-found") {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      id: params.id,
    },
  };
}
