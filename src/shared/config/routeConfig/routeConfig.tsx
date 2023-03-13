import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutesEnum {
  // eslint-disable-next-line no-unused-vars
  MAIN = 'main',
  // eslint-disable-next-line no-unused-vars
  ABOUT = 'about',
  // eslint-disable-next-line no-unused-vars
  NOT_FOUND = 'not_found'
}

export const RoutePaths: Record<AppRoutesEnum, string> = {
  [AppRoutesEnum.MAIN]: '/',
  [AppRoutesEnum.ABOUT]: '/about',
  // Последний. Отрабатывает если ни один до этого не отработал
  [AppRoutesEnum.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutesEnum, RouteProps> = {
  [AppRoutesEnum.MAIN]: {
    path: RoutePaths.main,
    element: <MainPage />,
  },
  [AppRoutesEnum.ABOUT]: {
    path: RoutePaths.about,
    element: <AboutPage />,
  },
  [AppRoutesEnum.NOT_FOUND]: {
    path: RoutePaths.not_found,
    element: <NotFoundPage />,
  },
};
