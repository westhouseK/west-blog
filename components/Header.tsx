import Head from "next/head";
import Link from "next/link";
import styles from "../styles/header.module.css";

const Header = () => (
  <>
    <Head>
      <title>west-blog</title>
      <link rel="icon" href="/favicon.svg" />
    </Head>

    <header className={styles.header}>
      <div className={styles.nav_container}>
        <nav className={styles.nav}>
          <div className={styles.main_title}>
            <Link href="/">
              <a>
                {/* <Image
                  className={styles.icon}
                  src="/favicon.svg"
                  width={50}
                  height={50}
                  alt="icon"
                /> */}
                west-blog
              </a>
            </Link>
          </div>
          <div className={styles.nav_item}>
            <Link href="/About">
              <a>About</a>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  </>
);

export default Header;
