import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { CurrencyEnum } from 'entities/Currency/model/types/Currency';
import { CountryEnum } from 'entities/Country/model/types/Country';
import avatarImg from 'shared/assets/tests/stories.jpg';
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
Primary.args = {
  data: {
    first: 'Neo',
    lastname: '123',
    age: 23,
    avatar: avatarImg,
    city: 'Paris',
    username: 'admin',
    country: CountryEnum.Serbia,
    currency: CurrencyEnum.EUR,
  },
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  data: {
    first: 'Neo',
    lastname: '123',
    age: 23,
    avatar: avatarImg,
    city: 'Paris',
    username: 'admin',
    country: CountryEnum.Serbia,
    currency: CurrencyEnum.EUR,
  },
};
PrimaryDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const withLoading = Template.bind({});
withLoading.args = { isLoading: true };

export const withLoadingDark = Template.bind({});
withLoadingDark.args = { isLoading: true };
withLoadingDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const withError = Template.bind({});
withError.args = { error: 'Error' };

export const withErrorDark = Template.bind({});
withErrorDark.args = { error: 'Error' };
withErrorDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
