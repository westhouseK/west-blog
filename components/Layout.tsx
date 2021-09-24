import Head from "next/head";
import Link from "next/link";

const Layout: React.FC = ({children}) => {
  return (
    <div className="page">
      <Head>
        <title>west-blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className="">
          <Link href="/">
            <a>west-blog</a>
          </Link>
        </h1>
      </header>

      <main>{children}</main>

      <footer></footer>
    </div>
  );
};

export default Layout;
