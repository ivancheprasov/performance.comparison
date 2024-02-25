'use client'

import { Menu } from "antd";
import Link from "next/link";
import { AppRoutes } from "../../lib/types/routes";

export default function NavigationMenu() {
  return (
    <nav>
      <Menu mode="horizontal">
        <Menu.Item itemID={AppRoutes.Welcome}>
          <Link href={AppRoutes.Welcome}>Welcome</Link>
        </Menu.Item>
        <Menu.Item itemID={AppRoutes.SignIn}>
          <Link href={AppRoutes.SignIn}>Sign In</Link>
        </Menu.Item>
        <Menu.Item itemID={AppRoutes.Table}>
          <Link href={AppRoutes.Table}>Table</Link>
        </Menu.Item>
        <Menu.Item itemID={AppRoutes.List}>
          <Link href={AppRoutes.List}>List</Link>
        </Menu.Item>
      </Menu>
    </nav>
  );
}
