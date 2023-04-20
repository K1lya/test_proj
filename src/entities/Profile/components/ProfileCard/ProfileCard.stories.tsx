import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { CurrencyEnum } from 'entities/Currency/model/types/Currency';
import { CountryEnum } from 'entities/Country/model/types/Country';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [ThemeDecorator(ThemeEnum.DARK), StoreDecorator({
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
