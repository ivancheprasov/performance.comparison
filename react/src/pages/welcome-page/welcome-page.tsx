import NavigationMenu from "components/navigation-menu";
import styles from "./welcome-page.module.scss";

export default function WelcomePage() {
  return (
    <>
      <NavigationMenu />
      <main>
        <h1 className={styles.header}>Welcome</h1>
        <p className={styles.subHeader}>Feel free to explore the navigation menu</p>
      </main>
    </>
  );
}
