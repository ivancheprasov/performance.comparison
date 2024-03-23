import { ReactElement } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { AppRoutes } from "shared-module/src/types/routes.ts";
import WelcomePage from 'pages/welcome-page';
import FormPage from "pages/form-page";
import TablePage from "pages/table-page";
import ListPage from "pages/list-page";
import GalleryPage from "pages/gallery-page";

const routes: RouteObject[] = [
  { path: AppRoutes.Welcome, element: <WelcomePage /> },
  { path: AppRoutes.Form, element: <FormPage /> },
  { path: AppRoutes.List, element: <ListPage /> },
  { path: AppRoutes.Table, element: <TablePage /> },
  { path: AppRoutes.Gallery, element: <GalleryPage /> },
];

export default function Router(): ReactElement | null {
  return useRoutes(routes);
}
