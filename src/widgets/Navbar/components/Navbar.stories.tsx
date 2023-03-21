import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import React from 'react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { Navbar } from './Navbar';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
  StoreDecorator({

  }),
];

export const LightEnter = Template.bind({});
LightEnter.args = {};
LightEnter.decorators = [
  StoreDecorator({
    user: {
      authData: {},
    },
  }),
];

export const Dark = Template.bind({});
Dark.decorators = [
  StoreDecorator({

  }),
  ThemeDecorator(ThemeEnum.DARK),
];
Dark.args = {};
