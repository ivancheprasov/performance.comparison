import NavigationMenu from './components/navigation-menu/navigation-menu';
import styles from './page.module.scss';

export default function Page() {
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
