'use client'

import { Menu, MenuProps } from "antd";
import Link from "next/link";
import { AppRoutes } from "../../lib/types/routes";
import styles from "./navigation-menu.module.scss";

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
];

export default function NavigationMenu() {
  return (
    <nav className={styles.menu}>
      <Menu mode="horizontal" items={items}/>
    </nav>
  );
}
