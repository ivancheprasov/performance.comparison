import dynamic from "next/dynamic";
import styles from "./navigation-menu.module.scss";

const NavigationItems = dynamic(() => import("./navigation-items/navigation-items"), {
  suspense: true,
  loading: () => <span>Loading...</span>
});

export default function NavigationMenu() {
  return (
    <div className={styles.menuWrapper}>
      <NavigationItems />
    </div>
  );
}
