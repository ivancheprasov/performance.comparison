import { ReactElement } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import WelcomePage from './pages/welcome-page';
import { AppRoutes } from "./types/routes";

const routes: RouteObject[] = [
  { path: AppRoutes.Welcome, element: <WelcomePage /> }
];

export default function Router(): ReactElement | null {
  return useRoutes(routes);
}
