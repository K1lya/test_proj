import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticlesPage } from 'pages/ArticlesPage';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
}

export enum AppRoutesEnum {
  // eslint-disable-next-line no-unused-vars
  MAIN = 'main',
  // eslint-disable-next-line no-unused-vars
  ABOUT = 'about',
  // eslint-disable-next-line no-unused-vars
  PROFILE = 'profile',
  // eslint-disable-next-line no-unused-vars
  ARTICLES = 'articles',
  // eslint-disable-next-line no-unused-vars
  ARTICLE_DETAILS = 'article_details',
  // Last
  // eslint-disable-next-line no-unused-vars
  NOT_FOUND = 'not_found'
}

export const RoutePaths: Record<AppRoutesEnum, string> = {
  [AppRoutesEnum.MAIN]: '/',
  [AppRoutesEnum.ABOUT]: '/about',
  [AppRoutesEnum.PROFILE]: '/profile/', // + id
  [AppRoutesEnum.ARTICLES]: '/articles',
  [AppRoutesEnum.ARTICLE_DETAILS]: '/articles/', // + :id
  // Последний. Отрабатывает если ни один до этого не отработал
  [AppRoutesEnum.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutesEnum, AppRoutesProps> = {
  [AppRoutesEnum.MAIN]: {
    path: RoutePaths.main,
    element: <MainPage />,
  },
  [AppRoutesEnum.ABOUT]: {
    path: RoutePaths.about,
    element: <AboutPage />,
  },
  [AppRoutesEnum.PROFILE]: {
    path: `${RoutePaths.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutesEnum.ARTICLES]: {
    path: RoutePaths.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutesEnum.ARTICLE_DETAILS]: {
    path: `${RoutePaths.article_details}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  // Last
  [AppRoutesEnum.NOT_FOUND]: {
    path: RoutePaths.not_found,
    element: <NotFoundPage />,
  },
};
