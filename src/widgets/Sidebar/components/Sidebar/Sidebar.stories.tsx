import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { Sidebar } from './Sidebar';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.decorators = [
  StoreDecorator({
    user: { authData: {} },
  }),
];
Light.args = {};

export const Dark = Template.bind({});
Dark.decorators = [
  ThemeDecorator(ThemeEnum.DARK),
  StoreDecorator({
    user: { authData: {} },
  }),
];
Dark.args = {};

export const NoAuth = Template.bind({});
NoAuth.decorators = [
  ThemeDecorator(ThemeEnum.DARK),
  StoreDecorator({
    user: {},
  }),
];
NoAuth.args = {};
