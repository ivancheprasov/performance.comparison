'use client'

import { Menu, MenuProps } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppRoutes } from "../../../lib/types/routes";
import styles from "./navigation-items.module.scss";

const items: MenuProps['items'] = [
  {
    label: <Link href={AppRoutes.Welcome}>Welcome</Link>,
    key: AppRoutes.Welcome,
  },
  {
    label: <Link href={AppRoutes.Form}>Form</Link>,
    key: AppRoutes.Form,
  },
  {
    label: <Link href={AppRoutes.List}>List</Link>,
    key: AppRoutes.List,
  },
  {
    label: <Link href={AppRoutes.Table}>Table</Link>,
    key: AppRoutes.Table,
  },
  {
    label: <Link href={AppRoutes.Gallery}>Gallery</Link>,
    key: AppRoutes.Gallery,
  },
];

export default function NavigationItems() {
  const pathname = usePathname();

  return (
    <nav className={styles.menu}>
      <Menu mode="horizontal" items={items} selectedKeys={[pathname]}/>
    </nav>
  );
}
