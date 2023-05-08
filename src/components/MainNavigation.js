import { NavLink } from "react-router-dom";
import styles from "./MainNavigiaton.module.css";
const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink className={({isActive})=> isActive ? styles.active : ""} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=> isActive ? styles.active : ""} to="/products">products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
