import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { CountryEnum, CurrencyEnum } from 'shared/types/enums';
import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
  profile: {
    data: {
      first: 'Neo',
      lastname: '123',
      age: 23,
      avatar: 'https://assets.mycast.io/actor_images/actor-keanu-reeves-197919_large.jpg?1618071949',
      city: 'Paris',
      username: 'admin',
      country: CountryEnum.Serbia,
      currency: CurrencyEnum.EUR,
    },
  },
})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(ThemeEnum.DARK), StoreDecorator({
  profile: {
    data: {
      first: 'Neo',
      lastname: '123',
      age: 23,
      avatar: 'https://assets.mycast.io/actor_images/actor-keanu-reeves-197919_large.jpg?1618071949',
      city: 'Paris',
      username: 'admin',
      country: CountryEnum.Serbia,
      currency: CurrencyEnum.EUR,
    },
  },
})];
