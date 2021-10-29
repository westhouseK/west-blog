import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/layout.module.css";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="page">
      <Header />
      <main className={styles.main_container}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
