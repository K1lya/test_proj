import React from 'react';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import AboutImg from 'shared/assets/icons/About.svg';
import HomeImg from 'shared/assets/icons/Home.svg';
import ProfileImg from 'shared/assets/icons/Man.svg';
import ArticlesImg from 'shared/assets/icons/Articles.svg';

export interface ISidebarItem {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const sidebarItemsList: ISidebarItem[] = [
  {
    path: RoutePaths.main,
    Icon: HomeImg,
    text: 'Главная',
  },

  {
    path: RoutePaths.about,
    Icon: AboutImg,
    text: 'О Сайте',
  },
  {
    path: RoutePaths.profile,
    Icon: ProfileImg,
    text: 'Профиль',
    authOnly: true,
  },
  {
    path: RoutePaths.articles,
    Icon: ArticlesImg,
    text: 'Статьи',
    authOnly: true,
  },
];
