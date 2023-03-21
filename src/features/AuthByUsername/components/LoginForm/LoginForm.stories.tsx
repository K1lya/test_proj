import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { LoginForm } from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
  loginForm: {
    username: 'admin',
    password: '123',
  },
})];

export const PrimaryError = Template.bind({});
PrimaryError.args = {};
PrimaryError.decorators = [StoreDecorator({
  loginForm: {
    username: 'admin',
    password: '123',
    error: 'error',
  },
})];

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {};
PrimaryLoading.decorators = [StoreDecorator({
  loginForm: {
    username: 'admin',
    password: '123',
    isLoading: true,
  },
})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [
  StoreDecorator({
    loginForm: {
      username: 'admin',
      password: '123',
    },
  }),
  ThemeDecorator(ThemeEnum.DARK),
];

export const PrimaryErrorDark = Template.bind({});
PrimaryErrorDark.args = {};
PrimaryErrorDark.decorators = [
  StoreDecorator({
    loginForm: {
      username: 'admin',
      password: '123',
      error: 'error',
    },
  }),
  ThemeDecorator(ThemeEnum.DARK),
];

export const PrimaryLoadingDark = Template.bind({});
PrimaryLoadingDark.args = {};
PrimaryLoadingDark.decorators = [
  StoreDecorator({
    loginForm: {
      username: 'admin',
      password: '123',
      isLoading: true,
    },
  }),
  ThemeDecorator(ThemeEnum.DARK),
];
