import { ReactElement } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import MainPage from "./pages/main-page";
import WelcomePage from './pages/welcome-page';
import { AppRoutes } from "./types/routes";
import SignInPage from "./pages/sign-in-page";

const routes: RouteObject[] = [
  { path: AppRoutes.Welcome, element: <WelcomePage /> },
  { path: AppRoutes.SignIn, element: <SignInPage /> },
  { path: AppRoutes.Main, element: <MainPage /> },
];

export default function Router(): ReactElement | null {
  return useRoutes(routes);
}
