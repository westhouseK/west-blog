import styles from "../styles/Sidebar.module.css";
import SidebarAbout from "./SideBarAbout";

const Sidebar = () => (
  <div className={styles.container}>
    <SidebarAbout />
  </div>
);

export default Sidebar;
