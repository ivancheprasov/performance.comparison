import styles from "./navigation-menu.module.scss";
import { lazy, Suspense } from "react";

const NavigationItems = lazy(() => import("./navigation-items"));

export default function NavigationMenu() {
  return (
    <div className={styles.menuWrapper}>
      <Suspense fallback={<span>Loading...</span>}>
        <NavigationItems />
      </Suspense>
    </div>
  );
}
