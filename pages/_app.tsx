import "../styles/globals.css";
import "modern-css-reset/dist/reset.min.css"; // リセットCSSを読み込む
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
