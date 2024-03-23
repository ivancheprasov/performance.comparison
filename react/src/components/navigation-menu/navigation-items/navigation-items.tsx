'use client';

import { Menu, MenuProps } from 'antd';
import { AppRoutes } from 'shared-module/src/types/routes';
import styles from './navigation-items.module.scss';
import { Link, useLocation } from "react-router-dom";

const items: MenuProps['items'] = [
  {
    label: <Link to={AppRoutes.Welcome}>Welcome</Link>,
    key: AppRoutes.Welcome,
  },
  {
    label: <Link to={AppRoutes.Form}>Form</Link>,
    key: AppRoutes.Form,
  },
  {
    label: <Link to={AppRoutes.List}>List</Link>,
    key: AppRoutes.List,
  },
  {
    label: <Link to={AppRoutes.Table}>Table</Link>,
    key: AppRoutes.Table,
  },
  {
    label: <Link to={AppRoutes.Gallery}>Gallery</Link>,
    key: AppRoutes.Gallery,
  },
];

export default function NavigationItems() {
  const { pathname } = useLocation();

  return (
    <nav className={styles.menu}>
      <Menu mode="horizontal" items={items} selectedKeys={[pathname]} />
    </nav>
  );
}
