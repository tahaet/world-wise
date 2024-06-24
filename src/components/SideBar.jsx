import { Outlet } from "react-router-dom";
import NavBar from "./AppNav";
import Logo from "./Logo";
import styles from "./SideBar.module.css";
export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <NavBar />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by world wide Inc.
        </p>
      </footer>
    </div>
  );
}
