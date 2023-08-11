import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: '100%',
  height: 200,
};
Primary.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  width: '100%',
  height: 200,
};
PrimaryLight.decorators = [ThemeDecorator(ThemeEnum.LIGHT)];

export const PrimaryColor = Template.bind({});
PrimaryColor.args = {
  width: '100%',
  height: 200,
};
PrimaryColor.decorators = [ThemeDecorator(ThemeEnum.COLOR)];

export const Circle = Template.bind({});
Circle.args = {
  border: '50%',
  width: 100,
  height: 100,
};
Circle.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const CircleLight = Template.bind({});
CircleLight.args = {
  border: '50%',
  width: 100,
  height: 100,
};
CircleLight.decorators = [ThemeDecorator(ThemeEnum.LIGHT)];
