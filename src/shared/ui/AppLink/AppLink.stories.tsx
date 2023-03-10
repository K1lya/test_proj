import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkThemeEnum } from 'shared/ui/AppLink/AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'AppLink',
  theme: AppLinkThemeEnum.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'AppLink',
  theme: AppLinkThemeEnum.SECONDARY,
};

export const Red = Template.bind({});
Red.args = {
  children: 'AppLink',
  theme: AppLinkThemeEnum.RED,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'AppLink',
  theme: AppLinkThemeEnum.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'AppLink',
  theme: AppLinkThemeEnum.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const RedDark = Template.bind({});
RedDark.args = {
  children: 'AppLink',
  theme: AppLinkThemeEnum.RED,
};
RedDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
