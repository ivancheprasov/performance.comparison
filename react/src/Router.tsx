import { ReactElement } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import Reservations from "./pages/Reservations";
import Welcome from './pages/Welcome';

const routes: RouteObject[] = [
  { path: ROUTES.WELCOME, element: <Welcome /> },
  { path: ROUTES.RESERVATIONS, element: <Reservations /> },
];

export default function Router(): ReactElement | null {
  return useRoutes(routes);
}
