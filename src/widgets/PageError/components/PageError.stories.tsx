import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/Themedecorator';
import { Theme } from 'app/providers/ThemeProvider';
import React from 'react';
import { PageError } from 'widgets/PageError';

export default {
  title: 'widgets/PageError',
  component: PageError,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PageError>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.args = {};
