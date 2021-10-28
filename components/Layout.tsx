import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Layout.module.css";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="page">
      <Head>
        <title>west-blog</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <header className={styles.header}>
        <div className={styles.nav_container}>
          <nav className={styles.nav}>
            <h1 className={styles.main_title}>
              <Link href="/">
                <a>west-blog</a>
              </Link>
            </h1>
          </nav>
        </div>
      </header>

      <main className={styles.main_container}>{children}</main>

      <footer></footer>
    </div>
  );
};

export default Layout;
