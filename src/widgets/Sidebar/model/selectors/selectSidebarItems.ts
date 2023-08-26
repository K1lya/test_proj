import { createSelector } from '@reduxjs/toolkit';
import { selectUserAuthData } from 'entities/User';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import HomeImg from 'shared/assets/icons/Home.svg';
import AboutImg from 'shared/assets/icons/About.svg';
import ProfileImg from 'shared/assets/icons/Man.svg';
import ArticlesImg from 'shared/assets/icons/Articles.svg';
import { ISidebarItem } from '../types/sidebar';

export const selectSidebarItems = createSelector(
  selectUserAuthData,
  (userData) => {
    const sidebarItemsList: ISidebarItem[] = [
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
    ];

    if (userData) {
      sidebarItemsList.push(
        {
          path: RoutePaths.profile + userData.id,
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
      );
    }

    return sidebarItemsList;
  },
);
